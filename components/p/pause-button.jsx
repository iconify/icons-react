import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_qdmlbaf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_qdmlbaf"/>`,
		"fallback": "openmoji:pause-button",
	});
}

export default Component;
