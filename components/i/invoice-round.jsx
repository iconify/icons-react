import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmc2pd60s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmc2pd60s"/>`,
		"fallback": "coolicons:invoice-round",
	});
}

export default Component;
