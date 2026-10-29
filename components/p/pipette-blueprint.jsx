import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fwduloe0g.css';
import '../../css/d/d352mmufr.css';
import '../../css/t/t1c6iwmbb.css';
import '../../css/k/k-m2qnbsk.css';
import '../../css/i/i15253ics.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fwduloe0g wm-deco"/><path class="d352mmufr wm-deco"/><path class="t1c6iwmbb wm-k"/><path class="k-m2qnbsk wm-a"/><path class="i15253ics wm-k"/></g>`,
		"fallback": "withicons:pipette-blueprint",
	});
}

export default Component;
