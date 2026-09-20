import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd4l3abhc.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd4l3abhc"/>`,
		"fallback": "maki:veterinary-11",
	});
}

export default Component;
