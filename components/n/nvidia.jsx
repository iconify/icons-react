import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip2z-kb_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip2z-kb_a"/>`,
		"fallback": "selfhst:nvidia",
	});
}

export default Component;
