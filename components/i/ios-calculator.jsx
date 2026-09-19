import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-2occ2bb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-2occ2bb"/>`,
		"fallback": "ion:ios-calculator",
	});
}

export default Component;
