import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksbumuw7r.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksbumuw7r"/>`,
		"fallback": "si-glyph:tea-cup",
	});
}

export default Component;
