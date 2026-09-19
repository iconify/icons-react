import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8ovz0q5d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8ovz0q5d"/>`,
		"fallback": "famicons:notifications-off",
	});
}

export default Component;
