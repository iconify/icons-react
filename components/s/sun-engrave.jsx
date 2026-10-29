import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xojf8v49t.css';
import '../../css/k/kv0n7fx-i.css';
import '../../css/y/yi23eea4c.css';
import '../../css/t/tg-es2b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xojf8v49t"/><path class="kv0n7fx-i wm-shadow"/><path class="wm-k yi23eea4c"/><path class="tg-es2b-k wm-a"/></g>`,
		"fallback": "withicons:sun-engrave",
	});
}

export default Component;
