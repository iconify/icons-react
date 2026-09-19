import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yremm404a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yremm404a"/>`,
		"fallback": "dashicons:star-empty",
	});
}

export default Component;
