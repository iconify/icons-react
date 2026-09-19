import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpqyh0d1a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpqyh0d1a"/>`,
		"fallback": "ion:ios-location",
	});
}

export default Component;
