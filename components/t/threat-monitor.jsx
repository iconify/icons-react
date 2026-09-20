import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucde5db9d.css';
import '../../css/s/smgf3k94c.css';
import '../../css/w/w42w686vk.css';
import '../../css/h/hs4t9rboz.css';
import '../../css/u/uid-a9bpm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ucde5db9d"/><path class="smgf3k94c"/><path class="w42w686vk"/><path class="hs4t9rboz"/><path class="uid-a9bpm"/></g>`,
		"fallback": "streamline-flex-color:threat-monitor",
	});
}

export default Component;
