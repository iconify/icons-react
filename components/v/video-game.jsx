import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjr6bfbws.css';
import '../../css/y/yf-jjmotg.css';
import '../../css/r/rreu2hboc.css';
import '../../css/p/ph0ur1bwk.css';
import '../../css/m/mmcyiac0s.css';
import '../../css/d/dq9khdbrj.css';
import '../../css/r/rqy2lsb_h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rjr6bfbws"/><path class="yf-jjmotg"/><path class="rreu2hboc"/><path class="ph0ur1bwk"/><path class="mmcyiac0s"/><path class="dq9khdbrj"/><path class="rqy2lsb_h"/></g>`,
		"fallback": "fluent-emoji-flat:video-game",
	});
}

export default Component;
