import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs5m_2bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs5m_2bht"/>`,
		"fallback": "coolicons:menu-alt-1-fill-round",
	});
}

export default Component;
