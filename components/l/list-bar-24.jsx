import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/essjfdbbx.css';
import '../../css/j/jlvgevbyb.css';
import '../../css/n/nkchmbc-t.css';
import '../../css/f/fr236kbdl.css';
import '../../css/b/bxegrmbjp.css';
import '../../css/s/se36adcuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG8G7zQeON)" class="essjfdbbx"/><path fill="url(#SVGyzT1zcNH)" class="jlvgevbyb"/><defs><linearGradient id="SVG8G7zQeON" x1="5.475" x2="20.939" y1=".429" y2="19.98" gradientUnits="userSpaceOnUse"><stop class="nkchmbc-t"/><stop offset="1" class="fr236kbdl"/></linearGradient><linearGradient id="SVGyzT1zcNH" x1="4.189" x2="11.747" y1="5.393" y2="8.745" gradientUnits="userSpaceOnUse"><stop offset=".125" class="bxegrmbjp"/><stop offset="1" class="se36adcuq"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:list-bar-24",
	});
}

export default Component;
