import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1fybybou.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1fybybou"/>`,
		"fallback": "si-glyph:triangle-right",
	});
}

export default Component;
