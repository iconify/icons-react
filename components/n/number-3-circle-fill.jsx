import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm51bcbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dm51bcbpc"/>`,
		"fallback": "iconamoon:number-3-circle-fill",
	});
}

export default Component;
