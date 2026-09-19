import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n7cp5yjmv.css';
import '../../css/w/w1y7w7bpk.css';
import '../../css/u/ua6bxzbzs.css';
import '../../css/e/ek70m4tim.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n7cp5yjmv"/><path class="w1y7w7bpk"/><path class="ua6bxzbzs"/><path class="ek70m4tim"/></g>`,
		"fallback": "glyphs:map-marker-1-outline",
	});
}

export default Component;
