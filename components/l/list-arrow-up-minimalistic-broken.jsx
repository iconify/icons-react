import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u-zqtib1a.css';
import '../../css/x/xvo0n--hd.css';
import '../../css/h/hjhjwb4fd.css';
import '../../css/i/iq-a2cc9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u-zqtib1a"/><path class="xvo0n--hd"/><path class="hjhjwb4fd"/><path class="iq-a2cc9w"/></g>`,
		"fallback": "solar:list-arrow-up-minimalistic-broken",
	});
}

export default Component;
