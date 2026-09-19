import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onmpbbb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="onmpbbb0c"/>`,
		"fallback": "iconamoon:number-8-circle-fill",
	});
}

export default Component;
