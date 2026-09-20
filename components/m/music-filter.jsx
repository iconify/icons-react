import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/epdwmcb6d.css';
import '../../css/o/oy18s4b0y.css';
import '../../css/c/cmxagetjr.css';
import '../../css/i/i7l94eb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="epdwmcb6d"/><path class="oy18s4b0y"/><path class="cmxagetjr"/><path class="i7l94eb_v"/></g>`,
		"fallback": "reicon:music-filter",
	});
}

export default Component;
