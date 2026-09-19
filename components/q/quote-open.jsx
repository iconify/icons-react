import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar7ya4bel.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar7ya4bel"/>`,
		"fallback": "si-glyph:quote-open",
	});
}

export default Component;
