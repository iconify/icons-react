import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s75iopu5y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s75iopu5y"/>`,
		"fallback": "ion:ios-bookmarks-outline",
	});
}

export default Component;
