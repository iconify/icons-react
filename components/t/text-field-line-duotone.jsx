import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kfvnd7u4f.css';
import '../../css/w/wp-9pxbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kfvnd7u4f"/><path class="wp-9pxbpn"/></g>`,
		"fallback": "solar:text-field-line-duotone",
	});
}

export default Component;
