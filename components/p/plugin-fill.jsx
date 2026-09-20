import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkn1d_bdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vkn1d_bdg"/>`,
		"fallback": "mingcute:plugin-fill",
	});
}

export default Component;
