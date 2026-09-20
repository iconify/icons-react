import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exm-ov3sf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exm-ov3sf"/>`,
		"fallback": "selfhst:traefik-light",
	});
}

export default Component;
