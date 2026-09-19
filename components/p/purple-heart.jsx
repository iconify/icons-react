import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtemydjmd.css';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/occz4wbgh.css';
import '../../css/a/atjk8mbde.css';
import '../../css/h/hsixsabso.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGUJ7Mq8OH" width="28" height="25" x="2" y="4" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="dtemydjmd"/></mask><g class="gp_8x1bzb"><path class="occz4wbgh"/><g mask="url(#SVGUJ7Mq8OH)" class="atjk8mbde"><path class="hsixsabso"/></g></g>`,
		"fallback": "fluent-emoji-high-contrast:purple-heart",
	});
}

export default Component;
