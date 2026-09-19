import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th-w9lb9o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th-w9lb9o"/>`,
		"fallback": "dinkie-icons:musical-keyboard-filled",
	});
}

export default Component;
