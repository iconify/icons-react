import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w4_echbvg.css';
import '../../css/a/auu9eitpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w4_echbvg"/><path class="auu9eitpe"/></g>`,
		"fallback": "iconoir:security-pass",
	});
}

export default Component;
