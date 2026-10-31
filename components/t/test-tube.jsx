import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f0nkw3b3u.css';
import '../../css/d/djvknyp7o.css';
import '../../css/p/psdmkpbst.css';
import '../../css/k/k_nchdcps.css';
import '../../css/i/ieq2ef8aj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f0nkw3b3u wm-shadow"/><path class="djvknyp7o"/><path class="psdmkpbst"/><path class="k_nchdcps"/><path class="ieq2ef8aj"/></g>`,
		"fallback": "withicons-retro:test-tube",
	});
}

export default Component;
