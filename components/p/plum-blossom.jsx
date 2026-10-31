import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/iqsddyg0e.css';
import '../../css/f/fyvzn1b6m.css';
import '../../css/n/n7z0aeb0k.css';
import '../../css/w/wb6z72bco.css';
import '../../css/s/s0_4x08ny.css';
import '../../css/g/gjwpyvzog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="iqsddyg0e wm-shadow"/><path class="fyvzn1b6m"/><path class="n7z0aeb0k"/><path class="wb6z72bco"/><path class="s0_4x08ny wm-s"/><path class="gjwpyvzog"/></g>`,
		"fallback": "withicons-retro:plum-blossom",
	});
}

export default Component;
