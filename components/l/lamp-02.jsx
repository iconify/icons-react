import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/n0gmhacsp.css';
import '../../css/x/xrpksfbkh.css';
import '../../css/b/bk_q82bze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="n0gmhacsp"/><path class="xrpksfbkh"/><path class="bk_q82bze"/></g>`,
		"fallback": "hugeicons:lamp-02",
	});
}

export default Component;
