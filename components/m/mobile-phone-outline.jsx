import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9fgmvbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y9fgmvbap"/>`,
		"fallback": "basil:mobile-phone-outline",
	});
}

export default Component;
