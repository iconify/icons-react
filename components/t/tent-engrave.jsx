import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x4iq_5ybs.css';
import '../../css/p/ppi5x7mln.css';
import '../../css/q/qlf4-g8mc.css';
import '../../css/x/xlau4cdnj.css';
import '../../css/k/koqkggbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k x4iq_5ybs"/><path class="ppi5x7mln wm-a"/><path class="qlf4-g8mc wm-shadow"/><path class="wm-k xlau4cdnj"/><path class="koqkggbqh wm-a"/></g>`,
		"fallback": "withicons:tent-engrave",
	});
}

export default Component;
