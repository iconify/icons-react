import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkwkeiw1k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkwkeiw1k"/>`,
		"fallback": "glyphs:l-outline",
	});
}

export default Component;
