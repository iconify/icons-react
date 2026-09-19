import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z894pkxrj.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z894pkxrj"/>`,
		"fallback": "si-glyph:scissor",
	});
}

export default Component;
