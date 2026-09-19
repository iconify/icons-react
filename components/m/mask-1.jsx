import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzrd1icfe.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzrd1icfe"/>`,
		"fallback": "si-glyph:mask-1",
	});
}

export default Component;
