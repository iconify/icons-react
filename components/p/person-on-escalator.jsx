import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6y99-9zm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6y99-9zm"/>`,
		"fallback": "pinhead:person-on-escalator",
	});
}

export default Component;
