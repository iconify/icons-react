import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsdns4anw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsdns4anw"/>`,
		"fallback": "ri:product-hunt-fill",
	});
}

export default Component;
