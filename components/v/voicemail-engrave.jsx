import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pbbswkb8p.css';
import '../../css/t/totmvqulo.css';
import '../../css/a/apbxdlbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pbbswkb8p"/><path class="totmvqulo wm-shadow"/><path class="apbxdlbgs"/></g>`,
		"fallback": "withicons:voicemail-engrave",
	});
}

export default Component;
