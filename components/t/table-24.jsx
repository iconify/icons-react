import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ta4qz3cyp.css';
import '../../css/o/oy-txh62y.css';
import '../../css/u/uboxbs2pu.css';
import '../../css/v/v057c6bdj.css';
import '../../css/m/mu8f_sb0x.css';
import '../../css/h/h1uc7_bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect fill="url(#SVGnW25pGtQ)" class="ta4qz3cyp"/><path fill="url(#SVGA8nT8b8A)" class="oy-txh62y"/><defs><linearGradient id="SVGnW25pGtQ" x1="4.286" x2="19.714" y1="4.286" y2="19.714" gradientUnits="userSpaceOnUse"><stop class="uboxbs2pu"/><stop offset="1" class="v057c6bdj"/></linearGradient><linearGradient id="SVGA8nT8b8A" x1="3" x2="21" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop class="mu8f_sb0x"/><stop offset="1" class="h1uc7_bmb"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:table-24",
	});
}

export default Component;
