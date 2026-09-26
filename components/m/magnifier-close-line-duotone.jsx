import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r0xhknb7f.css';
import '../../css/o/o3o_tvbax.css';
import '../../css/z/zohnu00qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="r0xhknb7f"/><path class="o3o_tvbax"/><path class="zohnu00qb"/></g>`,
		"fallback": "solar:magnifier-close-line-duotone",
	});
}

export default Component;
