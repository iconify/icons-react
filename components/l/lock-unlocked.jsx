import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li7mzybab.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li7mzybab"/>`,
		"fallback": "oi:lock-unlocked",
	});
}

export default Component;
