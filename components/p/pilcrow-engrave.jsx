import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xpn69tblh.css';
import '../../css/b/bi0a-7z0f.css';
import '../../css/x/xcyylac9e.css';
import '../../css/x/xbx3o24fa.css';
import '../../css/l/l51s4j92b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xpn69tblh"/><path class="bi0a-7z0f wm-a"/><path class="wm-shadow xcyylac9e"/><path class="wm-k xbx3o24fa"/><path class="l51s4j92b wm-a"/></g>`,
		"fallback": "withicons:pilcrow-engrave",
	});
}

export default Component;
