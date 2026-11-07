import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gwely914n.css';
import '../../css/e/eg-wi4b5c.css';
import '../../css/v/vltoy5rhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gwely914n"/><path class="eg-wi4b5c"/><path class="vltoy5rhv"/></g>`,
		"fallback": "solar:money-bag-broken",
	});
}

export default Component;
