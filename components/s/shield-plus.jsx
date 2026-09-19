import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyi5cjxdr.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyi5cjxdr"/>`,
		"fallback": "si-glyph:shield-plus",
	});
}

export default Component;
