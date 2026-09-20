import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmmc7xi2d.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmmc7xi2d"/>`,
		"fallback": "jam:shopify",
	});
}

export default Component;
