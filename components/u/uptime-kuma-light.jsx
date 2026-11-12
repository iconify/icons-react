import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkwa3_bzx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkwa3_bzx"/>`,
		"fallback": "selfhst:uptime-kuma-light",
	});
}

export default Component;
