import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw4syfera.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw4syfera"/>`,
		"fallback": "devicon-plain:sfml",
	});
}

export default Component;
