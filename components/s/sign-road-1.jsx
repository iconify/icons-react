import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyr8vnyio.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyr8vnyio"/>`,
		"fallback": "si-glyph:sign-road-1",
	});
}

export default Component;
