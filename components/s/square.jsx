import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se2hntbfv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se2hntbfv"/>`,
		"fallback": "glyphs:square",
	});
}

export default Component;
