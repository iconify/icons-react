import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deq4hgrol.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="deq4hgrol"/>`,
		"fallback": "heroicons:play-pause-16-solid",
	});
}

export default Component;
