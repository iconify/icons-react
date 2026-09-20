import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o8rzk78hp.css';
import '../../css/g/guvxamb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o8rzk78hp"/><path class="guvxamb1l"/></g>`,
		"fallback": "solar:pills-2-broken",
	});
}

export default Component;
