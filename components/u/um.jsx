import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqwf-7vsq.css';
import '../../css/o/oqsyrbbws.css';
import '../../css/k/k4-thijeo.css';
import '../../css/s/stlmykn8x.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wqwf-7vsq"/><path clip-rule="evenodd" class="oqsyrbbws"/><path class="k4-thijeo"/><path clip-rule="evenodd" class="stlmykn8x"/></g>`,
		"fallback": "flagpack:um",
	});
}

export default Component;
