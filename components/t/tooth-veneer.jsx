import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbm6qpyum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qbm6qpyum"/>`,
		"fallback": "griddy-icons:tooth-veneer",
	});
}

export default Component;
