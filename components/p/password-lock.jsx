import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdlubzb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdlubzb5c"/>`,
		"fallback": "noviair-light:password-lock",
	});
}

export default Component;
