import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flqsglbac.css';
import '../../css/l/l_r5ns7jv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flqsglbac"/><path class="l_r5ns7jv"/>`,
		"fallback": "ion:ios-swap",
	});
}

export default Component;
