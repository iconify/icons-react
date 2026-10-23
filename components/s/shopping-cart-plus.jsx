import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnk9c6m_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnk9c6m_g"/>`,
		"fallback": "vadivam:shopping-cart-plus",
	});
}

export default Component;
