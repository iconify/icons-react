import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/istshsb6v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="istshsb6v"/>`,
		"fallback": "ion:ios-search-strong",
	});
}

export default Component;
