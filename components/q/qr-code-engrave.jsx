import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/re6n26bxt.css';
import '../../css/n/n0om6cbya.css';
import '../../css/d/d5s3tzbfe.css';
import '../../css/k/kcag22w9s.css';
import '../../css/f/f98ia0txa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="re6n26bxt wm-k"/><path class="n0om6cbya wm-a"/><path class="d5s3tzbfe wm-shadow"/><path class="kcag22w9s wm-k"/><path class="f98ia0txa wm-a"/></g>`,
		"fallback": "withicons:qr-code-engrave",
	});
}

export default Component;
