import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iic6xwb_c.css';
import '../../css/f/fq367fial.css';
import '../../css/i/iom_occzf.css';
import '../../css/w/wn7r_htmm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iic6xwb_c"/><path class="fq367fial"/><path class="iom_occzf"/><path class="wn7r_htmm"/></g>`,
		"fallback": "glyphs:school-bus-outline",
	});
}

export default Component;
