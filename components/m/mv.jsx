import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4jlykykf.css';
import '../../css/u/u_ejovv_x.css';
import '../../css/k/kpz6-gbyv.css';
import '../../css/i/im_qzc9uk.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n4jlykykf"/><path class="u_ejovv_x"/><circle class="kpz6-gbyv"/><circle class="im_qzc9uk"/></g>`,
		"fallback": "cif:mv",
	});
}

export default Component;
