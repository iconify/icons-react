import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xnnhmccbq.css';
import '../../css/j/jcil5rb8a.css';
import '../../css/e/eyig6k37j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xnnhmccbq"/><path class="jcil5rb8a"/><path class="eyig6k37j"/></g>`,
		"fallback": "solar:lock-password-unlocked-broken",
	});
}

export default Component;
