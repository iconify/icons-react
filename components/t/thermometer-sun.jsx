import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/og2bz-m0s.css';
import '../../css/o/o0_9dsboj.css';
import '../../css/v/vwipwnble.css';
import '../../css/g/gknynpjfs.css';
import '../../css/x/x95z-zbte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="og2bz-m0s wm-shadow"/><path class="o0_9dsboj wm-shadow"/><path class="vwipwnble"/><path class="gknynpjfs"/><path class="x95z-zbte"/></g>`,
		"fallback": "withicons-brutal:thermometer-sun",
	});
}

export default Component;
