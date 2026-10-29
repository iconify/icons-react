import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v0wa9lmog.css';
import '../../css/u/uv6xo5b9m.css';
import '../../css/j/jesj_obln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v0wa9lmog wm-k"/><path class="uv6xo5b9m wm-k"/><path class="jesj_obln wm-a"/></g>`,
		"fallback": "withicons:popcorn-sketch",
	});
}

export default Component;
