import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebzc7_bra.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebzc7_bra"/>`,
		"fallback": "glyphs:sunrise-1",
	});
}

export default Component;
