import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ysr2z3hud.css';
import '../../css/a/agv7b5b0y.css';
import '../../css/i/iflu5x86c.css';
import '../../css/i/iqww668fj.css';
import '../../css/g/g9dcdd6st.css';
import '../../css/h/hx-wuc0xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ysr2z3hud"/><path class="agv7b5b0y"/><path class="iflu5x86c"/><path class="iqww668fj"/><path class="g9dcdd6st"/><path class="hx-wuc0xm"/></g>`,
		"fallback": "solar:printer-2-line-duotone",
	});
}

export default Component;
