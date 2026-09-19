import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj114hbbv.css';
import '../../css/n/n6f1xofwr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj114hbbv"/><path class="n6f1xofwr"/>`,
		"fallback": "ion:ios-journal",
	});
}

export default Component;
