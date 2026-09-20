import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/px--8xbgl.css';
import '../../css/m/m_uqjfbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="px--8xbgl"/><path class="m_uqjfbny"/></g>`,
		"fallback": "mage:phone-outgoing",
	});
}

export default Component;
