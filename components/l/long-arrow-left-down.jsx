import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vkf8dibku.css';
import '../../css/r/r3d5akbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vkf8dibku"/><path class="r3d5akbhj"/></g>`,
		"fallback": "iconoir:long-arrow-left-down",
	});
}

export default Component;
