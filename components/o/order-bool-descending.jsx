import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iak8-8yxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iak8-8yxw"/>`,
		"fallback": "mdi:order-bool-descending",
	});
}

export default Component;
