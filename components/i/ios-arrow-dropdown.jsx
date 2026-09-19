import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv3w-bboh.css';
import '../../css/e/e0us24bst.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv3w-bboh"/><path class="e0us24bst"/>`,
		"fallback": "ion:ios-arrow-dropdown",
	});
}

export default Component;
