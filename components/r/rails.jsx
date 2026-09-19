import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3y_m2brn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h3y_m2brn"/>`,
		"fallback": "devicon-plain:rails",
	});
}

export default Component;
