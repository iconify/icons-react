import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ae0h0ywtu.css';
import '../../css/k/k7nygkzdg.css';
import '../../css/a/ayydkbl3e.css';
import '../../css/m/mqno2ebsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ae0h0ywtu"/><path class="k7nygkzdg wm-a"/><path class="ayydkbl3e wm-k"/><path class="mqno2ebsq wm-a"/></g>`,
		"fallback": "withicons:tooth-crown-sketch",
	});
}

export default Component;
