import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n557phlxo.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n557phlxo"/>`,
		"fallback": "si-glyph:sound",
	});
}

export default Component;
