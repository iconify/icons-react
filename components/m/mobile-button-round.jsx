import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk0loy1nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk0loy1nx"/>`,
		"fallback": "coolicons:mobile-button-round",
	});
}

export default Component;
