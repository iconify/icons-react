import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igd-zybig.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="igd-zybig"/>`,
		"fallback": "glyphs:scissors-outline",
	});
}

export default Component;
