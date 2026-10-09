import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odyywebrd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odyywebrd"/>`,
		"fallback": "energy-icons:stop-20-bold",
	});
}

export default Component;
