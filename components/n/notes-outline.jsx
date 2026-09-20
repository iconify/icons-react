import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csk3q3blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="csk3q3blj"/>`,
		"fallback": "solar:notes-outline",
	});
}

export default Component;
