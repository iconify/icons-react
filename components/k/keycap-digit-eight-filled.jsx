import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtx-1ee8i.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtx-1ee8i"/>`,
		"fallback": "dinkie-icons:keycap-digit-eight-filled",
	});
}

export default Component;
