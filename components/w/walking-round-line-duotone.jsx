import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p7aa-3nja.css';
import '../../css/t/tldq1_vqs.css';
import '../../css/k/kk6lmubmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="p7aa-3nja"/><path class="tldq1_vqs"/><path class="kk6lmubmz"/></g>`,
		"fallback": "solar:walking-round-line-duotone",
	});
}

export default Component;
