import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpymo9b8h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpymo9b8h"/>`,
		"fallback": "la:skull-crossbones",
	});
}

export default Component;
