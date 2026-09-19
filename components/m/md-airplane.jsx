import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta3mn9bvd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta3mn9bvd"/>`,
		"fallback": "ion:md-airplane",
	});
}

export default Component;
