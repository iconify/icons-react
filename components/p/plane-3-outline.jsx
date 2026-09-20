import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe0m34kxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pe0m34kxw"/>`,
		"fallback": "solar:plane-3-outline",
	});
}

export default Component;
