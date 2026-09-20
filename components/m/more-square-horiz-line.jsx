import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gui0q2a6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gui0q2a6l"/>`,
		"fallback": "si:more-square-horiz-line",
	});
}

export default Component;
