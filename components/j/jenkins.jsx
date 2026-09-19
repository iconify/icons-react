import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r30xk0-2x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r30xk0-2x"/>`,
		"fallback": "devicon-plain:jenkins",
	});
}

export default Component;
