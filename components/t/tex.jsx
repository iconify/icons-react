import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry8mjxbmx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry8mjxbmx"/>`,
		"fallback": "fa7-brands:tex",
	});
}

export default Component;
