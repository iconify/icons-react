import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nygdq9b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nygdq9b2l"/>`,
		"fallback": "noviair:sd-card-check",
	});
}

export default Component;
