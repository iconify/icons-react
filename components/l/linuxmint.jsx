import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6b-ou0ik.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6b-ou0ik"/>`,
		"fallback": "devicon-plain:linuxmint",
	});
}

export default Component;
