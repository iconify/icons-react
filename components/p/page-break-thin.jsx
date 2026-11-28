import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx9chsbvt.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx9chsbvt"/>`,
		"fallback": "pullo:page-break-thin",
	});
}

export default Component;
