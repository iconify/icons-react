import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4z93u2al.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4z93u2al"/>`,
		"fallback": "si-glyph:remove",
	});
}

export default Component;
