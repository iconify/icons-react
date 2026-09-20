import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/omv6hbped.css';
import '../../css/o/oog1cvbvi.css';
import '../../css/q/qsd99y9sf.css';
import '../../css/c/c9t-4lbgs.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/de5deccyd.css';
import '../../css/f/frg8f-bln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="omv6hbped"/><path class="oog1cvbvi"/><path class="qsd99y9sf"/><path class="c9t-4lbgs"/><g class="mc2zb0bvp"><path class="de5deccyd"/><path class="frg8f-bln"/></g></g>`,
		"fallback": "solar:moon-fog-bold-duotone",
	});
}

export default Component;
