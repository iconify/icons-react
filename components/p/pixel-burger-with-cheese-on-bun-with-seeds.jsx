import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq3zy8b4z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq3zy8b4z"/>`,
		"fallback": "pinhead:pixel-burger-with-cheese-on-bun-with-seeds",
	});
}

export default Component;
