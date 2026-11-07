import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fchi9zv9c.css';
import '../../css/k/kvxqcabet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fchi9zv9c"/><path class="kvxqcabet"/>`,
		"fallback": "solar:panel-bottom-close-bold",
	});
}

export default Component;
