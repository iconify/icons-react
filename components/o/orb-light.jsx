import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lldu6nt-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lldu6nt-n"/>`,
		"fallback": "selfhst:orb-light",
	});
}

export default Component;
