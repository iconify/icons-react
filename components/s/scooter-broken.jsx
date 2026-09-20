import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gs6s0-4rn.css';
import '../../css/q/qnqthcbii.css';
import '../../css/m/m8rlb1beu.css';
import '../../css/q/q75k85b7n.css';
import '../../css/x/x0uzfm1ll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gs6s0-4rn"/><path class="qnqthcbii"/><path class="m8rlb1beu"/><path class="q75k85b7n"/><path class="x0uzfm1ll"/></g>`,
		"fallback": "solar:scooter-broken",
	});
}

export default Component;
