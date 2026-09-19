import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccub-obgi.css';
import '../../css/z/zbv5-bbgx.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccub-obgi"/><path class="zbv5-bbgx"/>`,
		"fallback": "ei:tag",
	});
}

export default Component;
