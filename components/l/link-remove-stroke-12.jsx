import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_1ewccfx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_1ewccfx"/>`,
		"fallback": "garden:link-remove-stroke-12",
	});
}

export default Component;
