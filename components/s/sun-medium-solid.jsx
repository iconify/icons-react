import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m46032bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m46032bav"/>`,
		"fallback": "iconaut:sun-medium-solid",
	});
}

export default Component;
