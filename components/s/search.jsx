import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3w4gfbgm.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3w4gfbgm"/>`,
		"fallback": "topcoat:search",
	});
}

export default Component;
