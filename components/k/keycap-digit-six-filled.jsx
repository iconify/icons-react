import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm8wsyb5q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm8wsyb5q"/>`,
		"fallback": "dinkie-icons:keycap-digit-six-filled",
	});
}

export default Component;
