import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjtd44buw.css';
import '../../css/t/tkkp7gb-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjtd44buw"/><path class="tkkp7gb-e"/>`,
		"fallback": "selfhst:lets-encrypt",
	});
}

export default Component;
