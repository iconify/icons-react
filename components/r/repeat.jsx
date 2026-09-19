import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nr3xkyk0p.css';
import '../../css/q/qsdj6sedl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nr3xkyk0p"/><path class="qsdj6sedl"/></g>`,
		"fallback": "iconoir:repeat",
	});
}

export default Component;
