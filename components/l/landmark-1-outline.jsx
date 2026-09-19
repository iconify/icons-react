import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uti_wsw4y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uti_wsw4y"/>`,
		"fallback": "glyphs:landmark-1-outline",
	});
}

export default Component;
