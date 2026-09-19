import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi_m99bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zi_m99bjs"/>`,
		"fallback": "iconamoon:star-off-fill",
	});
}

export default Component;
