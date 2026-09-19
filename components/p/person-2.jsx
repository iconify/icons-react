import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asuv-oy1q.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asuv-oy1q"/>`,
		"fallback": "si-glyph:person-2",
	});
}

export default Component;
