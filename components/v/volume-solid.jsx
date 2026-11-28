import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-9-vufbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-9-vufbb"/>`,
		"fallback": "iconaut:volume-solid",
	});
}

export default Component;
