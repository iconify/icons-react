import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mpj-i-bct.css';
import '../../css/m/mu8a_pbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mpj-i-bct"/><path class="mu8a_pbcy"/></g>`,
		"fallback": "withicons:pause-sketch",
	});
}

export default Component;
