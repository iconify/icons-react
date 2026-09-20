import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rkfycknfg.css';
import '../../css/v/vqei0m67j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rkfycknfg"/><path class="vqei0m67j"/></g>`,
		"fallback": "reicon:slider-vertical",
	});
}

export default Component;
