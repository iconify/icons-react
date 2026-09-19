import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma0ovmb3x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma0ovmb3x"/>`,
		"fallback": "famicons:volume-off",
	});
}

export default Component;
