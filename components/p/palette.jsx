import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm7w0lb-k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm7w0lb-k"/>`,
		"fallback": "fa-solid:palette",
	});
}

export default Component;
