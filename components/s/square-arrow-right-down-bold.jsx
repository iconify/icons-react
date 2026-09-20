import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz9r1ynfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lz9r1ynfp"/>`,
		"fallback": "solar:square-arrow-right-down-bold",
	});
}

export default Component;
