import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sghq9ybsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sghq9ybsb"/>`,
		"fallback": "selfhst:self-hosted-gateway-dark",
	});
}

export default Component;
