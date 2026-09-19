import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr3x-ib6o.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr3x-ib6o"/>`,
		"fallback": "devicon-plain:raspberrypi",
	});
}

export default Component;
