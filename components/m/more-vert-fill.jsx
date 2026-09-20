import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjl46-bna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjl46-bna"/>`,
		"fallback": "si:more-vert-fill",
	});
}

export default Component;
