import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-zn_rb4f.css';
import '../../css/v/vp_-scb_a.css';
import '../../css/i/ios73fbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k z-zn_rb4f"/><path class="vp_-scb_a wm-k"/><path class="ios73fbpx wm-a"/>`,
		"fallback": "withicons-bauhaus:pilcrow",
	});
}

export default Component;
