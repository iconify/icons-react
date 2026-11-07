import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c55umkfci.css';
import '../../css/n/nfvqnvzcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c55umkfci"/><path clip-rule="evenodd" class="nfvqnvzcc"/>`,
		"fallback": "solar:login-3-outline",
	});
}

export default Component;
