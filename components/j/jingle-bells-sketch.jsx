import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xc9kxsl1e.css';
import '../../css/z/z0l1z5b1x.css';
import '../../css/x/x4md61b4h.css';
import '../../css/q/q7ta1gemp.css';
import '../../css/z/zycozjbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xc9kxsl1e"/><path class="wm-a z0l1z5b1x"/><path class="wm-k x4md61b4h"/><path class="q7ta1gemp wm-a"/><path class="wm-s zycozjbot"/></g>`,
		"fallback": "withicons:jingle-bells-sketch",
	});
}

export default Component;
