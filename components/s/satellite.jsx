import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it9cnwzdt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it9cnwzdt"/>`,
		"fallback": "si-glyph:satellite",
	});
}

export default Component;
