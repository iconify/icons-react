import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1_1j_05q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1_1j_05q"/>`,
		"fallback": "selfhst:jstor",
	});
}

export default Component;
