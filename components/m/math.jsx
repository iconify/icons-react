import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3ha7mwhy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3ha7mwhy"/>`,
		"fallback": "glyphs:math",
	});
}

export default Component;
