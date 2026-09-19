import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pzct8bbdv.css';
import '../../css/t/t5-lr3bdz.css';
import '../../css/n/nkchmbc-t.css';
import '../../css/f/fr236kbdl.css';
import '../../css/b/bxegrmbjp.css';
import '../../css/s/se36adcuq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGenVxZcmr)" class="pzct8bbdv"/><path fill="url(#SVGSlfAEKMc)" class="t5-lr3bdz"/><defs><linearGradient id="SVGenVxZcmr" x1="3.075" x2="13.243" y1=".286" y2="13.855" gradientUnits="userSpaceOnUse"><stop class="nkchmbc-t"/><stop offset="1" class="fr236kbdl"/></linearGradient><linearGradient id="SVGSlfAEKMc" x1="2.713" x2="7.395" y1="3.595" y2="5.464" gradientUnits="userSpaceOnUse"><stop offset=".125" class="bxegrmbjp"/><stop offset="1" class="se36adcuq"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:list-bar-16",
	});
}

export default Component;
