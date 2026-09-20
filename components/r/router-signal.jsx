import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gmuzbbbpn.css';
import '../../css/g/ghg17sbpc.css';
import '../../css/r/rrcnd9b2h.css';
import '../../css/h/h7pr41bdg.css';
import '../../css/j/jg6iw-brl.css';
import '../../css/r/rm26opbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gmuzbbbpn"/><path class="ghg17sbpc"/><path class="rrcnd9b2h"/><path class="h7pr41bdg"/><path class="jg6iw-brl"/><path class="rm26opbzp"/></g>`,
		"fallback": "streamline-ultimate-color:router-signal",
	});
}

export default Component;
