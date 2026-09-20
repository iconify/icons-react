import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t64sbybat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t64sbybat"/>`,
		"fallback": "streamline-ultimate:spiral-shape-bold",
	});
}

export default Component;
