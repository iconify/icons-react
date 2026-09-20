import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2zno77vb.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2zno77vb"/>`,
		"fallback": "jam:switch-right-f",
	});
}

export default Component;
