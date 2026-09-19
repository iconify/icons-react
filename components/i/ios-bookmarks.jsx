import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4zgz8bex.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4zgz8bex"/>`,
		"fallback": "ion:ios-bookmarks",
	});
}

export default Component;
