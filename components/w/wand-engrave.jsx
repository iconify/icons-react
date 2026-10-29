import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f--02_bkw.css';
import '../../css/h/h38dysxin.css';
import '../../css/l/l9kn83bwd.css';
import '../../css/p/psyzc1_dw.css';
import '../../css/i/igb16csex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f--02_bkw wm-k"/><path class="h38dysxin wm-a"/><path class="l9kn83bwd wm-shadow"/><path class="psyzc1_dw wm-k"/><path class="igb16csex wm-a"/></g>`,
		"fallback": "withicons:wand-engrave",
	});
}

export default Component;
