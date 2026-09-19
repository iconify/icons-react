import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdervjb6h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdervjb6h"/>`,
		"fallback": "devicon-plain:rexx",
	});
}

export default Component;
