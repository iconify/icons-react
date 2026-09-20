import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uajpshzth.css';
import '../../css/g/g2q_fsa1p.css';
import '../../css/u/u8is-4cck.css';
import '../../css/c/csq_7e3ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uajpshzth"/><path class="g2q_fsa1p"/><path class="u8is-4cck"/><path class="csq_7e3ir"/></g>`,
		"fallback": "lets-icons:trophy-light",
	});
}

export default Component;
