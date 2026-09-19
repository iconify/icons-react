import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/we1jr_06d.css';
import '../../css/t/tz_gf3e9g.css';
import '../../css/f/f0gpxfb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="we1jr_06d"/><path class="tz_gf3e9g"/><path class="f0gpxfb_w"/></g>`,
		"fallback": "hugeicons:video-02",
	});
}

export default Component;
