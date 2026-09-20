import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e1dt95bvo.css';
import '../../css/n/nk-f8ubml.css';
import '../../css/o/omnrth6_m.css';
import '../../css/u/u-himcq2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e1dt95bvo"/><path class="nk-f8ubml"/><path class="omnrth6_m"/><path class="u-himcq2i"/></g>`,
		"fallback": "reicon:music-playlist",
	});
}

export default Component;
