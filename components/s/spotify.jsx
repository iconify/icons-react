import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip-a2mckl.css';
import '../../css/p/p_p4lxbry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip-a2mckl"/><path class="p_p4lxbry"/>`,
		"fallback": "selfhst:spotify",
	});
}

export default Component;
