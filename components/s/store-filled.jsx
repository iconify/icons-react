import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggqxp-m1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggqxp-m1t"/>`,
		"fallback": "boxicons:store-filled",
	});
}

export default Component;
