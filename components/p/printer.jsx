import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yqhv93bnc.css';
import '../../css/d/d_rsssbuh.css';
import '../../css/v/vyfg9nbhl.css';
import '../../css/j/jgh4_14cb.css';
import '../../css/z/z76bh0owq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="yqhv93bnc"/><path class="d_rsssbuh"/><path class="vyfg9nbhl"/><path class="jgh4_14cb"/><path class="z76bh0owq"/></g>`,
		"fallback": "matita:printer",
	});
}

export default Component;
