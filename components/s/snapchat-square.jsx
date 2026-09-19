import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urmlq0btm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urmlq0btm"/>`,
		"fallback": "fa7-brands:snapchat-square",
	});
}

export default Component;
