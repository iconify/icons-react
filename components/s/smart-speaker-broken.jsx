import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wp68rqjes.css';
import '../../css/d/d3o-c7zwo.css';
import '../../css/l/l1jur_bpp.css';
import '../../css/o/o-34giu1u.css';
import '../../css/q/q8mqojmpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wp68rqjes"/><path class="d3o-c7zwo"/><path class="l1jur_bpp"/><path class="o-34giu1u"/><path class="q8mqojmpj"/></g>`,
		"fallback": "solar:smart-speaker-broken",
	});
}

export default Component;
