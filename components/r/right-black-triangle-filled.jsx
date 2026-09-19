import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1eef546k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1eef546k"/>`,
		"fallback": "dinkie-icons:right-black-triangle-filled",
	});
}

export default Component;
