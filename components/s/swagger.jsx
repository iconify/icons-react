import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooxg0mb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooxg0mb6k"/>`,
		"fallback": "thesvg:swagger",
	});
}

export default Component;
