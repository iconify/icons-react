import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv6qmsbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv6qmsbpt"/>`,
		"fallback": "si:spinner-fill",
	});
}

export default Component;
