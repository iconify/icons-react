import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-1york6r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-1york6r"/>`,
		"fallback": "devicon-plain:linear",
	});
}

export default Component;
