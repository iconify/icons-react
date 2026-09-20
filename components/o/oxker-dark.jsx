import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g214mxb4x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g214mxb4x"/>`,
		"fallback": "selfhst:oxker-dark",
	});
}

export default Component;
