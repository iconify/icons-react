import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/exq1o42bg.css';
import '../../css/w/w2ktjvbtb.css';
import '../../css/b/bqbzijb2c.css';
import '../../css/t/ti18yabmh.css';
import '../../css/p/p9pn97g5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="exq1o42bg wm-k"/><path class="w2ktjvbtb wm-a"/><path class="bqbzijb2c wm-shadow"/><path class="ti18yabmh wm-k"/><path class="p9pn97g5g wm-a"/></g>`,
		"fallback": "withicons:sleigh-engrave",
	});
}

export default Component;
