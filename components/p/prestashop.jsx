import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c72l8qbsy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c72l8qbsy"/>`,
		"fallback": "devicon-plain:prestashop",
	});
}

export default Component;
