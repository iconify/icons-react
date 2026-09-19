import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt52jcc3i.css';
import '../../css/n/ns2y_7_hd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt52jcc3i"/><path class="ns2y_7_hd"/>`,
		"fallback": "ion:md-pricetags",
	});
}

export default Component;
