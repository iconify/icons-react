import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nl9qzn-xd.css';
import '../../css/k/ktz4j74-r.css';
import '../../css/w/w0kh5pr9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nl9qzn-xd"/><path class="ktz4j74-r"/><path class="w0kh5pr9u"/></g>`,
		"fallback": "solar:temperature-broken",
	});
}

export default Component;
