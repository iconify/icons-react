import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bemd1ta0c.css';
import '../../css/d/dfsv6g9gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bemd1ta0c"/><path class="dfsv6g9gx"/></g>`,
		"fallback": "hugeicons:mail-love-02",
	});
}

export default Component;
