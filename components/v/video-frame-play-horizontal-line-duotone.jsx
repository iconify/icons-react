import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/t/txs08cb3y.css';
import '../../css/x/xiwqv5b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="txs08cb3y"/><path class="xiwqv5b8r"/></g>`,
		"fallback": "solar:video-frame-play-horizontal-line-duotone",
	});
}

export default Component;
