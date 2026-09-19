import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olowe0bfz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olowe0bfz"/>`,
		"fallback": "glyphs:spinner-1",
	});
}

export default Component;
