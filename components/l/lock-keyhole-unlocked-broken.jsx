import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cql1pwtbp.css';
import '../../css/x/xnnhmccbq.css';
import '../../css/j/jcil5rb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="cql1pwtbp"/><path class="xnnhmccbq"/><path class="jcil5rb8a"/></g>`,
		"fallback": "solar:lock-keyhole-unlocked-broken",
	});
}

export default Component;
