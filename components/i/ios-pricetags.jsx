import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f832m7bua.css';
import '../../css/e/e5rlcgb_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f832m7bua"/><path class="e5rlcgb_v"/>`,
		"fallback": "ion:ios-pricetags",
	});
}

export default Component;
