import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqox9xelv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqox9xelv"/>`,
		"fallback": "keyline-icons:search-2-x",
	});
}

export default Component;
