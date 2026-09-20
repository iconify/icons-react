import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu7m_8bkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu7m_8bkd"/>`,
		"fallback": "mdi:invoice-arrow-left",
	});
}

export default Component;
