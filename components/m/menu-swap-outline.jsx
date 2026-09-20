import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq_6gjbsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq_6gjbsw"/>`,
		"fallback": "mdi:menu-swap-outline",
	});
}

export default Component;
