import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iox6mb34c.css';
import '../../css/n/n03_5k4sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iox6mb34c"/><path class="n03_5k4sz"/></g>`,
		"fallback": "hugeicons:sun-cloud-snow-01",
	});
}

export default Component;
