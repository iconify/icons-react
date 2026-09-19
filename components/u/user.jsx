import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssoqd4bjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssoqd4bjq"/>`,
		"fallback": "cil:user",
	});
}

export default Component;
