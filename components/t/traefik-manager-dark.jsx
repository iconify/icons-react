import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4ks7abcs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4ks7abcs"/>`,
		"fallback": "selfhst:traefik-manager-dark",
	});
}

export default Component;
