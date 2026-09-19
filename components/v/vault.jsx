import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mij7ueklo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mij7ueklo"/>`,
		"fallback": "devicon:vault",
	});
}

export default Component;
