import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ncsx83b9b.css';
import '../../css/h/hhlxfkbol.css';
import '../../css/h/hxd6ts2yz.css';
import '../../css/b/b-fd45bwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ncsx83b9b"/><path class="hhlxfkbol"/><path class="hxd6ts2yz"/><path class="b-fd45bwd"/></g>`,
		"fallback": "solar:reorder-linear",
	});
}

export default Component;
