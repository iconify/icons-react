import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq25edcdw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq25edcdw"/>`,
		"fallback": "glyphs:r-bold",
	});
}

export default Component;
