import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te8---m7d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te8---m7d"/>`,
		"fallback": "selfhst:ubuntu",
	});
}

export default Component;
