import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i84m_g4-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i84m_g4-k"/>`,
		"fallback": "mdi:lock-add-outline",
	});
}

export default Component;
