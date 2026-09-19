import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwa99fblt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwa99fblt"/>`,
		"fallback": "glyphs:one-bold",
	});
}

export default Component;
