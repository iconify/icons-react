import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfylp182e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfylp182e"/>`,
		"fallback": "glyphs:l",
	});
}

export default Component;
