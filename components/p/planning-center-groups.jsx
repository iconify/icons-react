import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijfq5mbjy.css';
import '../../css/x/xgykduccr.css';
import '../../css/g/g639brb8v.css';
import '../../css/r/rjbkpnbmg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGQd5LMRun" x1="194.609" x2="1236.828" y1="184.391" y2="-857.828" gradientTransform="matrix(.4 0 0 -.4 -29.4 122.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ijfq5mbjy"/><stop offset="1" class="xgykduccr"/></linearGradient><path fill="url(#SVGQd5LMRun)" class="g639brb8v"/><path class="rjbkpnbmg"/>`,
		"fallback": "selfhst:planning-center-groups",
	});
}

export default Component;
