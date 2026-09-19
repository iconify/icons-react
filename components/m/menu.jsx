import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiry2_s1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiry2_s1u"/>`,
		"fallback": "cil:menu",
	});
}

export default Component;
