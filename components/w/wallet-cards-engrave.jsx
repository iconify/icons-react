import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ny6o60buq.css';
import '../../css/x/xft9x10os.css';
import '../../css/i/irqnl3b4f.css';
import '../../css/b/b0l52zb1j.css';
import '../../css/u/ui_lws96b.css';
import '../../css/y/yl22r9bbu.css';
import '../../css/c/cdc_phbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ny6o60buq wm-k"/><path class="wm-a xft9x10os"/><path class="irqnl3b4f wm-shadow"/><path class="b0l52zb1j wm-k"/><path class="ui_lws96b wm-k"/><path class="wm-a yl22r9bbu"/><path class="cdc_phbqy wm-a"/></g>`,
		"fallback": "withicons:wallet-cards-engrave",
	});
}

export default Component;
