import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myg5r-y-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myg5r-y-r"/>`,
		"fallback": "ion:ios-close-empty",
	});
}

export default Component;
