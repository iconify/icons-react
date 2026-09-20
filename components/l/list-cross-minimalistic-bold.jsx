import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln1qphb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ln1qphb6o"/>`,
		"fallback": "solar:list-cross-minimalistic-bold",
	});
}

export default Component;
