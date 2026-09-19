import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2b_tlbtj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2b_tlbtj"/>`,
		"fallback": "si-glyph:sleep",
	});
}

export default Component;
