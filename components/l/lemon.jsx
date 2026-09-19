import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qix_boums.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qix_boums"/>`,
		"fallback": "bxs:lemon",
	});
}

export default Component;
