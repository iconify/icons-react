import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9_5pv2nz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9_5pv2nz"/>`,
		"fallback": "ion:md-recording",
	});
}

export default Component;
