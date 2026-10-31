import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ijwbir13f.css';
import '../../css/g/gk2c3buwa.css';
import '../../css/o/o1uhu6yjk.css';
import '../../css/r/r_a3q8b5t.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ijwbir13f wm-shadow"/><path class="gk2c3buwa"/><path class="o1uhu6yjk"/><path class="r_a3q8b5t"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:microphone-off",
	});
}

export default Component;
