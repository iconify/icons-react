import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmmu1j42j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmmu1j42j"/>`,
		"fallback": "thesvg-color:upptime",
	});
}

export default Component;
