import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz79s0rdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz79s0rdw"/>`,
		"fallback": "coolicons:square-arrow-up-fill-round",
	});
}

export default Component;
