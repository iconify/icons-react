import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfkeo8igu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfkeo8igu"/>`,
		"fallback": "heroicons:stop-20-solid",
	});
}

export default Component;
