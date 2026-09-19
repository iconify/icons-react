import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br9gtx66z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="br9gtx66z"/>`,
		"fallback": "bitcoin-icons:keyboard-filled",
	});
}

export default Component;
