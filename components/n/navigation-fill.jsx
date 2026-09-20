import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr7sn_xxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kr7sn_xxo"/>`,
		"fallback": "mingcute:navigation-fill",
	});
}

export default Component;
