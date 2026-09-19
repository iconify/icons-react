import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp0hb03lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp0hb03lf"/>`,
		"fallback": "hugeicons:space",
	});
}

export default Component;
