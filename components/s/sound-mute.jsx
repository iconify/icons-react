import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/louj8cble.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="louj8cble"/>`,
		"fallback": "si-glyph:sound-mute",
	});
}

export default Component;
