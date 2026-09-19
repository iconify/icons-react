import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsea4m1au.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsea4m1au"/>`,
		"fallback": "glyphs:pin",
	});
}

export default Component;
