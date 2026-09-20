import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x0fuh28ql.css';
import '../../css/r/r8oc3ubxa.css';
import '../../css/z/ze8g9pbfl.css';
import '../../css/b/bia4v_qno.css';
import '../../css/r/r1zr_yb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x0fuh28ql"/><path class="r8oc3ubxa"/><path class="ze8g9pbfl"/><circle transform="rotate(-30 18.665 4.768)" class="bia4v_qno"/><ellipse transform="rotate(-30 18.665 4.768)" class="r1zr_yb0c"/></g>`,
		"fallback": "solar:planet-4-linear",
	});
}

export default Component;
