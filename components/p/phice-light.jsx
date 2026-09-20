import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne2d3dzjs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne2d3dzjs"/>`,
		"fallback": "selfhst:phice-light",
	});
}

export default Component;
