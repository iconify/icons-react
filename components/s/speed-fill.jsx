import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axt6h9bgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="axt6h9bgb"/>`,
		"fallback": "lets-icons:speed-fill",
	});
}

export default Component;
