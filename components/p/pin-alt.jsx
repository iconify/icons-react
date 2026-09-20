import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwft6v2va.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwft6v2va"/>`,
		"fallback": "jam:pin-alt",
	});
}

export default Component;
