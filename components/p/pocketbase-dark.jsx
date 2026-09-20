import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_lpikbgk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_lpikbgk"/>`,
		"fallback": "selfhst:pocketbase-dark",
	});
}

export default Component;
