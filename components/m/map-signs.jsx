import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex4r1ebmz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex4r1ebmz"/>`,
		"fallback": "glyphs:map-signs",
	});
}

export default Component;
