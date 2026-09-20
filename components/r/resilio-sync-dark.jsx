import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6_c0xb0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6_c0xb0n"/>`,
		"fallback": "selfhst:resilio-sync-dark",
	});
}

export default Component;
