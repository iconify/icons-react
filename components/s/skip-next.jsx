import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyzjse4-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyzjse4-u"/>`,
		"fallback": "iconoir:skip-next",
	});
}

export default Component;
