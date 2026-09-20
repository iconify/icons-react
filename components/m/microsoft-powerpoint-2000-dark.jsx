import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d25h6sbox.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d25h6sbox"/>`,
		"fallback": "selfhst:microsoft-powerpoint-2000-dark",
	});
}

export default Component;
