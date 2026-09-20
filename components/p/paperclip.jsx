import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj14t89gk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj14t89gk"/>`,
		"fallback": "la:paperclip",
	});
}

export default Component;
