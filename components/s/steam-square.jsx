import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz207_u2f.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz207_u2f"/>`,
		"fallback": "fa-brands:steam-square",
	});
}

export default Component;
