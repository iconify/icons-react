import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xyj51-3yi.css';
import '../../css/u/uwvegzi1z.css';
import '../../css/s/shsa3e98e.css';
import '../../css/k/kgcxnxbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xyj51-3yi"/><path class="uwvegzi1z wm-a"/><path class="shsa3e98e wm-k"/><path class="kgcxnxbyj wm-a"/></g>`,
		"fallback": "withicons:refresh-sketch",
	});
}

export default Component;
