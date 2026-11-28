import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/matp353vt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="matp353vt"/>`,
		"fallback": "iconaut:math-symbols-solid",
	});
}

export default Component;
