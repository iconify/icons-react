import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkmwa6k4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xkmwa6k4i"/>`,
		"fallback": "token:jones",
	});
}

export default Component;
