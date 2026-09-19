import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8by7gb-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8by7gb-s"/>`,
		"fallback": "ion:ios-settings",
	});
}

export default Component;
