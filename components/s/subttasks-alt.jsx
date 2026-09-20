import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/d/dpqjl1opr.css';
import '../../css/j/jwd-jrevq.css';
import '../../css/q/q90b_qbjv.css';
import '../../css/j/j9zbk3bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect transform="rotate(90 16 9)" class="dpqjl1opr"/><rect transform="rotate(90 20 17)" class="jwd-jrevq"/><path class="q90b_qbjv"/><path class="j9zbk3bom"/></g>`,
		"fallback": "lets-icons:subttasks-alt",
	});
}

export default Component;
