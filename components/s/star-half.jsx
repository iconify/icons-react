import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfjo-w2pn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfjo-w2pn"/>`,
		"fallback": "glyphs:star-half",
	});
}

export default Component;
