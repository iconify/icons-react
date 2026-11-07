import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8qfwibcp.css';
import '../../css/l/lnqwqtb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8qfwibcp"/><path clip-rule="evenodd" class="lnqwqtb0h"/>`,
		"fallback": "solar:key-minimalistic-square-3-bold",
	});
}

export default Component;
