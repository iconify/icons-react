import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rpmymt4-c.css';
import '../../css/n/n-f0l1bjt.css';
import '../../css/r/r35wb3bpv.css';
import '../../css/n/nw1asb53l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rpmymt4-c wm-shadow"/><path class="n-f0l1bjt wm-shadow"/><path class="r35wb3bpv"/><path class="nw1asb53l"/></g>`,
		"fallback": "withicons-brutal:pilcrow",
	});
}

export default Component;
