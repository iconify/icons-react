import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggub7_bum.css';
import '../../css/w/wsd978bdd.css';
import '../../css/t/thdlzyjna.css';
import '../../css/t/tiql7ybpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ggub7_bum"/><path class="wsd978bdd"/><path class="thdlzyjna"/><path class="tiql7ybpv"/></g>`,
		"fallback": "lucide-extended:tangent-duotone",
	});
}

export default Component;
