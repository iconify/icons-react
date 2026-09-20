import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj-k8dbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kj-k8dbia"/>`,
		"fallback": "solar:square-double-alt-arrow-up-bold",
	});
}

export default Component;
