import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9ps03s-o.css';
import '../../css/i/iz1dmwoac.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9ps03s-o"/><path class="iz1dmwoac"/>`,
		"fallback": "energy-icons:invoice-20-bold",
	});
}

export default Component;
