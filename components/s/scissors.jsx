import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cew5y9b3m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cew5y9b3m"/>`,
		"fallback": "raphael:scissors",
	});
}

export default Component;
