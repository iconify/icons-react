import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiop2sbys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jiop2sbys"/>`,
		"fallback": "solar:square-transfer-vertical-bold",
	});
}

export default Component;
