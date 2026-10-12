import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q0_9pqbee.css';
import '../../css/u/ull_34beu.css';
import '../../css/u/uswle2b1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q0_9pqbee"/><path class="ull_34beu"/><path class="uswle2b1j"/></g>`,
		"fallback": "lucide-extended:square-mouse-pointer-duotone",
	});
}

export default Component;
