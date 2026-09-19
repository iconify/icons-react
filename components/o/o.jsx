import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kggs5hblh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kggs5hblh"/>`,
		"fallback": "glyphs:o",
	});
}

export default Component;
