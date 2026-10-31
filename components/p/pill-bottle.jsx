import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kypdtu5bv.css';
import '../../css/u/uf1tmx7qt.css';
import '../../css/e/eahmihe3u.css';
import '../../css/q/q7p376bdf.css';
import '../../css/c/cv9-98c7o.css';
import '../../css/p/pcg1j_bzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kypdtu5bv wm-shadow"/><path class="uf1tmx7qt"/><path class="eahmihe3u"/><path class="q7p376bdf"/><path class="cv9-98c7o"/><path class="pcg1j_bzh"/></g>`,
		"fallback": "withicons-retro:pill-bottle",
	});
}

export default Component;
