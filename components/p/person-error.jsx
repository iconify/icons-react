import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akfcedcmu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akfcedcmu"/>`,
		"fallback": "si-glyph:person-error",
	});
}

export default Component;
