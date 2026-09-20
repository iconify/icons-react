import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bceuwg-1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bceuwg-1y"/>`,
		"fallback": "uil:presentation-check",
	});
}

export default Component;
