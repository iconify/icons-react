import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng5ph0tfg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng5ph0tfg"/>`,
		"fallback": "glyphs:map",
	});
}

export default Component;
