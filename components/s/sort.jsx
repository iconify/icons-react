import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzgayr8xg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzgayr8xg"/>`,
		"fallback": "glyphs:sort",
	});
}

export default Component;
