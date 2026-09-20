import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k44leqden.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k44leqden"/>`,
		"fallback": "solar:shield-warning-bold",
	});
}

export default Component;
