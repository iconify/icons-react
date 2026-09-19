import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc_dg99_z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc_dg99_z"/>`,
		"fallback": "game-icons:tv",
	});
}

export default Component;
