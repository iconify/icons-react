import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/utymdgx_e.css';
import '../../css/x/x1sq-9b4b.css';
import '../../css/c/cfl3_9b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="utymdgx_e"/><path class="x1sq-9b4b"/><path class="cfl3_9b4r"/></g>`,
		"fallback": "solar:video-frame-play-horizontal-line-duotone",
	});
}

export default Component;
