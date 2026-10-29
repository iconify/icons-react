import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/g-sgu6b1d.css';
import '../../css/v/vae2kkbgb.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/a/a53k2acqr.css';
import '../../css/g/gt402wbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="g-sgu6b1d wm-deco"/><path class="vae2kkbgb wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="a53k2acqr wm-k"/><path class="gt402wbqt wm-a"/></g>`,
		"fallback": "withicons:train-blueprint",
	});
}

export default Component;
