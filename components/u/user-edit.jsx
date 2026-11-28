import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_vn6unjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_vn6unjo"/>`,
		"fallback": "noviair-light:user-edit",
	});
}

export default Component;
