import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqo-pac3p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqo-pac3p"/>`,
		"fallback": "selfhst:pixelfin-light",
	});
}

export default Component;
