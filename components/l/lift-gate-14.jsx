import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlh4vhbep.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlh4vhbep"/>`,
		"fallback": "osmic:lift-gate-14",
	});
}

export default Component;
