import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn6pd7b0q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn6pd7b0q"/>`,
		"fallback": "glyphs:r-duo",
	});
}

export default Component;
