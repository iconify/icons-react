import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi99i0bxz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi99i0bxz"/>`,
		"fallback": "selfhst:libera-chat-dark",
	});
}

export default Component;
