import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efz0tq6mc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efz0tq6mc"/>`,
		"fallback": "devicon-plain:javascript",
	});
}

export default Component;
