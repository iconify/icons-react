import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh475k0hn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh475k0hn"/>`,
		"fallback": "glyphs-poly:line",
	});
}

export default Component;
