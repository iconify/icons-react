import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tz_gf3e9g.css';
import '../../css/f/f0gpxfb_w.css';
import '../../css/e/eturhmkap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tz_gf3e9g"/><path class="f0gpxfb_w"/><circle class="eturhmkap"/></g>`,
		"fallback": "hugeicons:video-01",
	});
}

export default Component;
