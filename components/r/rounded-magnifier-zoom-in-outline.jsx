import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7g4d_bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g7g4d_bmg"/>`,
		"fallback": "solar:rounded-magnifier-zoom-in-outline",
	});
}

export default Component;
