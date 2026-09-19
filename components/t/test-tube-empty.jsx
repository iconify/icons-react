import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfhjfo2hk.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfhjfo2hk"/>`,
		"fallback": "si-glyph:test-tube-empty",
	});
}

export default Component;
