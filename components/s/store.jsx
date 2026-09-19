import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k14qws69a.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k14qws69a"/>`,
		"fallback": "si-glyph:store",
	});
}

export default Component;
