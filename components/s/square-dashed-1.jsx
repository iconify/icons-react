import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsdq_3b3n.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsdq_3b3n"/>`,
		"fallback": "si-glyph:square-dashed-1",
	});
}

export default Component;
