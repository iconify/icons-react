import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgqiq1u1n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgqiq1u1n"/>`,
		"fallback": "selfhst:kiwix-light",
	});
}

export default Component;
