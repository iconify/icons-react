import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4xjtxb3p.css';
import '../../css/u/u27cghbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4xjtxb3p"/><path clip-rule="evenodd" class="u27cghbgg"/>`,
		"fallback": "solar:radio-minimalistic-bold",
	});
}

export default Component;
