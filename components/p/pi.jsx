import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6th-8ofz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6th-8ofz"/>`,
		"fallback": "noviair-light:pi",
	});
}

export default Component;
