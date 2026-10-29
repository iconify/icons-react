import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xlo2h6b6s.css';
import '../../css/h/hthrldewh.css';
import '../../css/k/kqyrhjb5c.css';
import '../../css/g/gipt-ubsi.css';
import '../../css/r/rwkqkubws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xlo2h6b6s"/><path class="hthrldewh wm-k"/><path class="kqyrhjb5c wm-a"/><path class="gipt-ubsi wm-k"/><path class="rwkqkubws wm-a"/></g>`,
		"fallback": "withicons:leaf-sketch",
	});
}

export default Component;
