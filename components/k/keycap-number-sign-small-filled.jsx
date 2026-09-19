import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4b2i8bki.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4b2i8bki"/>`,
		"fallback": "dinkie-icons:keycap-number-sign-small-filled",
	});
}

export default Component;
