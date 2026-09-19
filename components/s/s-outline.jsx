import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utulh6bwc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utulh6bwc"/>`,
		"fallback": "glyphs:s-outline",
	});
}

export default Component;
