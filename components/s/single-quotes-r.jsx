import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb7_vib4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb7_vib4s"/>`,
		"fallback": "ci:single-quotes-r",
	});
}

export default Component;
