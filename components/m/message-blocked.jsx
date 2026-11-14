import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n_i39v4gj.css';
import '../../css/l/lwpkskbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n_i39v4gj"/><path class="lwpkskbct"/></g>`,
		"fallback": "hugeicons:message-blocked",
	});
}

export default Component;
