import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ymsf7p9bg.css';
import '../../css/w/w4gucabsy.css';
import '../../css/o/ovwmwdbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k ymsf7p9bg"/><path class="w4gucabsy wm-a"/><path class="ovwmwdbbu wm-s"/></g>`,
		"fallback": "withicons:party-popper-gloss",
	});
}

export default Component;
