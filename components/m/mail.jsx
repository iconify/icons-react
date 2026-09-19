import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9z5hbei.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in9z5hbei"/>`,
		"fallback": "si-glyph:mail",
	});
}

export default Component;
