import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pvkc1k-jx.css';
import '../../css/g/gg604n2bm.css';
import '../../css/z/za12y0ykl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pvkc1k-jx"/><path class="gg604n2bm"/><path class="za12y0ykl"/></g>`,
		"fallback": "hugeicons:message-delay-02",
	});
}

export default Component;
