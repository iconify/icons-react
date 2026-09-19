import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff7verbwf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff7verbwf"/>`,
		"fallback": "glyphs:map-marker",
	});
}

export default Component;
