import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgajd6j3c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgajd6j3c"/>`,
		"fallback": "dinkie-icons:keycap-shift-filled",
	});
}

export default Component;
