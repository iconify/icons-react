import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o30ctab0j.css';
import '../../css/t/th_2fsb0e.css';
import '../../css/d/d-a_qsb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="o30ctab0j"/><path class="th_2fsb0e"/><path class="d-a_qsb5c"/></g>`,
		"fallback": "keyline-icons:radar-sharp-two-tone",
	});
}

export default Component;
