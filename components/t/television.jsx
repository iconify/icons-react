import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq6ekactp.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq6ekactp"/>`,
		"fallback": "si-glyph:television",
	});
}

export default Component;
