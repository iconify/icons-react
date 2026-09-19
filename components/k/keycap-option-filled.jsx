import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9l8h93fz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9l8h93fz"/>`,
		"fallback": "dinkie-icons:keycap-option-filled",
	});
}

export default Component;
