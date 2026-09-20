import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed3nujbno.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed3nujbno"/>`,
		"fallback": "radix-icons:triangle-down",
	});
}

export default Component;
