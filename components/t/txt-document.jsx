import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egr5ponnb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egr5ponnb"/>`,
		"fallback": "ix:txt-document",
	});
}

export default Component;
