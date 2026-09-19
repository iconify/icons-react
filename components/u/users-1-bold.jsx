import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sctufhdka.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sctufhdka"/>`,
		"fallback": "glyphs:users-1-bold",
	});
}

export default Component;
