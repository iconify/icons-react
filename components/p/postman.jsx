import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u60sa06dw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u60sa06dw"/>`,
		"fallback": "devicon-plain:postman",
	});
}

export default Component;
