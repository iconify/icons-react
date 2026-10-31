import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/geiqwsblw.css';
import '../../css/d/d39ywpn1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="geiqwsblw"/><path class="d39ywpn1q"/></g>`,
		"fallback": "coolicons:rotate-left-bulk-round",
	});
}

export default Component;
