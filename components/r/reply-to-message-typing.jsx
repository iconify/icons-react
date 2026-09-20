import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/v3nuobjlr.css';
import '../../css/s/s_xrb4h4a.css';
import '../../css/w/wcfmswr9g.css';
import '../../css/h/hag6u4blz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="v3nuobjlr"/><path class="s_xrb4h4a"/><path class="wcfmswr9g"/><path class="hag6u4blz"/></g>`,
		"fallback": "streamline-plump-color:reply-to-message-typing",
	});
}

export default Component;
