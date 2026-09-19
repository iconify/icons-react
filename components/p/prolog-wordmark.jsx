import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxzmh491c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxzmh491c"/>`,
		"fallback": "devicon-plain:prolog-wordmark",
	});
}

export default Component;
