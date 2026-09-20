import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipb0gbcjw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipb0gbcjw"/>`,
		"fallback": "maki:restaurant-seafood-15",
	});
}

export default Component;
