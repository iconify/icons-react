import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3q48_xry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3q48_xry"/>`,
		"fallback": "keyline-icons:panels-top-left-fill",
	});
}

export default Component;
