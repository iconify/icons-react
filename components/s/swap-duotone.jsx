import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7530fb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7530fb5z primary"/>`,
		"fallback": "iconaut:swap-duotone",
	});
}

export default Component;
