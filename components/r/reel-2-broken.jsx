import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pn2r-9bzq.css';
import '../../css/i/i46k68_po.css';
import '../../css/k/ko6o-6b9b.css';
import '../../css/p/p8jx-kb8x.css';
import '../../css/j/ja8v-rhtc.css';
import '../../css/n/ne6lh4btq.css';
import '../../css/z/zbfkny6yh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pn2r-9bzq"/><path class="i46k68_po"/><path class="ko6o-6b9b"/><path class="p8jx-kb8x"/><path class="ja8v-rhtc"/><path class="ne6lh4btq"/><path class="zbfkny6yh"/></g>`,
		"fallback": "solar:reel-2-broken",
	});
}

export default Component;
