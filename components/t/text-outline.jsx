import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anw8c2tnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anw8c2tnw"/>`,
		"fallback": "eva:text-outline",
	});
}

export default Component;
