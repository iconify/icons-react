import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uec7-abdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uec7-abdr"/>`,
		"fallback": "noviair:moon-star",
	});
}

export default Component;
