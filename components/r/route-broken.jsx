import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w42iuxbof.css';
import '../../css/p/pmzn7ofxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w42iuxbof"/><path class="pmzn7ofxe"/></g>`,
		"fallback": "solar:route-broken",
	});
}

export default Component;
