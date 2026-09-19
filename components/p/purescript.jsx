import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5v8rch1u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5v8rch1u"/>`,
		"fallback": "devicon:purescript",
	});
}

export default Component;
