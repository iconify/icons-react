import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py9te0bmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py9te0bmo"/>`,
		"fallback": "mdi-light:shape-triangle",
	});
}

export default Component;
