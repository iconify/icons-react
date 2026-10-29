import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fpa8j25-i.css';
import '../../css/p/pm9g_wbfa.css';
import '../../css/b/b5c76ibey.css';
import '../../css/b/btlgwpbsn.css';
import '../../css/z/z6q0xzsvv.css';
import '../../css/q/q08n-4bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fpa8j25-i wm-k"/><path class="pm9g_wbfa wm-a"/><path class="b5c76ibey wm-shadow"/><path class="btlgwpbsn wm-k"/><path class="wm-k z6q0xzsvv"/><path class="q08n-4bjs wm-a"/></g>`,
		"fallback": "withicons:sun-moon-engrave",
	});
}

export default Component;
