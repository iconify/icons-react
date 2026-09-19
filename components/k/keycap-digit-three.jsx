import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h194vi7el.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h194vi7el"/>`,
		"fallback": "dinkie-icons:keycap-digit-three",
	});
}

export default Component;
