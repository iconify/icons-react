import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v55c813ts.css';
import '../../css/i/i9wr98bya.css';
import '../../css/p/pi715z2hw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v55c813ts wm-k"/><path class="i9wr98bya wm-k"/><path class="pi715z2hw wm-a"/></g>`,
		"fallback": "withicons:split-sketch",
	});
}

export default Component;
