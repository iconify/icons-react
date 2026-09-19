import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njp9bxbwt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njp9bxbwt"/>`,
		"fallback": "dinkie-icons:keycap-digit-four-filled",
	});
}

export default Component;
