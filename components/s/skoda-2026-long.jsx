import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozde0bblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozde0bblw"/>`,
		"fallback": "cbi:skoda-2026-long",
	});
}

export default Component;
