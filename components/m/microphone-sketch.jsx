import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vu1ofi0mn.css';
import '../../css/a/a368k0bcb.css';
import '../../css/g/gjnqlbcln.css';
import '../../css/d/d6roupt_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vu1ofi0mn"/><path class="a368k0bcb wm-a"/><path class="gjnqlbcln wm-k"/><path class="d6roupt_x wm-a"/></g>`,
		"fallback": "withicons:microphone-sketch",
	});
}

export default Component;
