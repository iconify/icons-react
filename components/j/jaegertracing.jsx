import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuq4we08l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuq4we08l"/>`,
		"fallback": "devicon-plain:jaegertracing",
	});
}

export default Component;
