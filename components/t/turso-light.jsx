import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc_mx6bxm.css';

const viewBox = {"width":201,"height":170};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc_mx6bxm"/>`,
		"fallback": "thesvg-color:turso-light",
	});
}

export default Component;
