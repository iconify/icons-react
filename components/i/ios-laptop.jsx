import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrw-wd3gt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrw-wd3gt"/>`,
		"fallback": "ion:ios-laptop",
	});
}

export default Component;
