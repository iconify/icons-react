import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf7n-7b7h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf7n-7b7h"/>`,
		"fallback": "selfhst:seedsync-dark",
	});
}

export default Component;
