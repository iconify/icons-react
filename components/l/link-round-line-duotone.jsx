import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z649-m4ax.css';
import '../../css/p/po9tgl0kv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z649-m4ax"/><path class="po9tgl0kv"/></g>`,
		"fallback": "solar:link-round-line-duotone",
	});
}

export default Component;
