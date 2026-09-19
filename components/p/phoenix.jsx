import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0sbubcuh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0sbubcuh"/>`,
		"fallback": "devicon:phoenix",
	});
}

export default Component;
