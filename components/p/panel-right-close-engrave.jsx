import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/okex9absk.css';
import '../../css/m/mte5nkbne.css';
import '../../css/t/tlpgutb5x.css';
import '../../css/v/vwzncsbmf.css';
import '../../css/z/zub4acc2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="okex9absk wm-k"/><path class="mte5nkbne wm-a"/><path class="tlpgutb5x wm-shadow"/><path class="vwzncsbmf wm-k"/><path class="wm-a zub4acc2g"/></g>`,
		"fallback": "withicons:panel-right-close-engrave",
	});
}

export default Component;
