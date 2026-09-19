import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n88bwiv0a.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n88bwiv0a"/>`,
		"fallback": "si-glyph:two-arrow-right",
	});
}

export default Component;
