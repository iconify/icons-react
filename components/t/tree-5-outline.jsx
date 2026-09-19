import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v40dffb0a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v40dffb0a"/>`,
		"fallback": "glyphs:tree-5-outline",
	});
}

export default Component;
