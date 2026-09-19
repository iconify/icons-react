import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u1vhlt4_a.css';
import '../../css/f/felm6jbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u1vhlt4_a"/><path class="felm6jbve"/></g>`,
		"fallback": "hugeicons:tv-02",
	});
}

export default Component;
