import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6s-tdxlh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n6s-tdxlh"/>`,
		"fallback": "glyphs:o-outline",
	});
}

export default Component;
