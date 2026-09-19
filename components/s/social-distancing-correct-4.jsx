import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/doj91o9hc.css';
import '../../css/i/ilqbw3b4c.css';
import '../../css/r/rp5txgbzd.css';
import '../../css/c/c8ok01kit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="doj91o9hc"/><path class="ilqbw3b4c"/><path class="rp5txgbzd"/><path class="c8ok01kit"/></g>`,
		"fallback": "covid:social-distancing-correct-4",
	});
}

export default Component;
