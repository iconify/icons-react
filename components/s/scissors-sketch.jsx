import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dn3jvaciq.css';
import '../../css/u/u_-s9s-iw.css';
import '../../css/n/nhhvnqb6p.css';
import '../../css/x/xvqt18b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dn3jvaciq wm-k"/><path class="u_-s9s-iw wm-a"/><path class="nhhvnqb6p wm-k"/><path class="wm-a xvqt18b2p"/></g>`,
		"fallback": "withicons:scissors-sketch",
	});
}

export default Component;
