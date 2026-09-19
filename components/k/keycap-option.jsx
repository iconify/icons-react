import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb9ijrb7r.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb9ijrb7r"/>`,
		"fallback": "dinkie-icons:keycap-option",
	});
}

export default Component;
