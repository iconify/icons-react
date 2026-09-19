import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzcjqdbir.css';
import '../../css/u/upwfrwbkk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzcjqdbir"/><path class="upwfrwbkk"/>`,
		"fallback": "ion:ios-notifications-outline",
	});
}

export default Component;
