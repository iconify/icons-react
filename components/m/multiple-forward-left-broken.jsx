import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x7y32eb3s.css';
import '../../css/g/goudx8bva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x7y32eb3s"/><path class="goudx8bva"/></g>`,
		"fallback": "solar:multiple-forward-left-broken",
	});
}

export default Component;
