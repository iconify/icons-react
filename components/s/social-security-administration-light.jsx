import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2ei1uv_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2ei1uv_n"/>`,
		"fallback": "selfhst:social-security-administration-light",
	});
}

export default Component;
