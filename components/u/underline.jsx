import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc64tebsp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc64tebsp"/>`,
		"fallback": "glyphs-poly:underline",
	});
}

export default Component;
