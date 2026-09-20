import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj24m_bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj24m_bxk"/>`,
		"fallback": "streamline-ultimate:shopping-basket-1-bold",
	});
}

export default Component;
