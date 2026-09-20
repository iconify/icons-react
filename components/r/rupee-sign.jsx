import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne0nl4bnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne0nl4bnn"/>`,
		"fallback": "uil:rupee-sign",
	});
}

export default Component;
