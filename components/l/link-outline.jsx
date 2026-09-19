import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw36nxb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw36nxb_w"/>`,
		"fallback": "bitcoin-icons:link-outline",
	});
}

export default Component;
