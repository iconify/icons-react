import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx4y6cc8o.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx4y6cc8o"/>`,
		"fallback": "si-glyph:upwards-arrow-to-bar",
	});
}

export default Component;
