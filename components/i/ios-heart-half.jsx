import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1fjhccnl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1fjhccnl"/>`,
		"fallback": "ion:ios-heart-half",
	});
}

export default Component;
