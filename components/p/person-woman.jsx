import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re9s0d93e.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re9s0d93e"/>`,
		"fallback": "si-glyph:person-woman",
	});
}

export default Component;
