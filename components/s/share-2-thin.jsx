import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_47-0bwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_47-0bwb"/>`,
		"fallback": "iconamoon:share-2-thin",
	});
}

export default Component;
