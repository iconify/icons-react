import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dufqe1b5r.css';
import '../../css/j/jj2eg2but.css';
import '../../css/c/cipdabcte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dufqe1b5r"/><path class="jj2eg2but"/><path class="cipdabcte"/></g>`,
		"fallback": "solar:mirror-left-broken",
	});
}

export default Component;
