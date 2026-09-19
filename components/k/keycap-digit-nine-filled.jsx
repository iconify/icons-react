import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8bdu7buu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8bdu7buu"/>`,
		"fallback": "dinkie-icons:keycap-digit-nine-filled",
	});
}

export default Component;
