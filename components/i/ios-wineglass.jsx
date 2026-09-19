import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5kq0zb5a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5kq0zb5a"/>`,
		"fallback": "ion:ios-wineglass",
	});
}

export default Component;
