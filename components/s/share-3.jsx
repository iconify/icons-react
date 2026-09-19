import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byepqcr0w.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byepqcr0w"/>`,
		"fallback": "si-glyph:share-3",
	});
}

export default Component;
