import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myq6b2b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myq6b2b0h primary"/>`,
		"fallback": "iconaut:remove-formatting-duotone",
	});
}

export default Component;
