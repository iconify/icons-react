import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sh-ukhyex.css';
import '../../css/e/erwpxsxta.css';
import '../../css/n/nxtr40p0j.css';
import '../../css/w/w500urbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sh-ukhyex"/><path class="erwpxsxta"/><path class="nxtr40p0j"/><path class="w500urbnb"/></g>`,
		"fallback": "andrsrxn:speech",
	});
}

export default Component;
