import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/ror8fyj6a.css';
import '../../css/u/ul0rk9bgh.css';
import '../../css/w/w29ath28m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ror8fyj6a"/><path class="ul0rk9bgh"/><path class="w29ath28m"/></g>`,
		"fallback": "solar:temperature-linear",
	});
}

export default Component;
