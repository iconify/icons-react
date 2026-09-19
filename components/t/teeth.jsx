import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxwa2fbqv.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxwa2fbqv"/>`,
		"fallback": "si-glyph:teeth",
	});
}

export default Component;
