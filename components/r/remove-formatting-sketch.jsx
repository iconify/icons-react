import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/ro8t4enop.css';
import '../../css/p/p4xp11bjk.css';
import '../../css/y/y8ndjjvgg.css';
import '../../css/r/rpa3wcr1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ro8t4enop wm-k"/><path class="p4xp11bjk wm-s"/><path class="wm-k y8ndjjvgg"/><path class="rpa3wcr1x wm-s"/></g>`,
		"fallback": "withicons:remove-formatting-sketch",
	});
}

export default Component;
