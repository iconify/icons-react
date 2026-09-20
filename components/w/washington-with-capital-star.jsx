import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8mufgdiv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8mufgdiv"/>`,
		"fallback": "pinhead:washington-with-capital-star",
	});
}

export default Component;
