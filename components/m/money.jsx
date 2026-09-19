import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igz9ekoxr.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igz9ekoxr"/>`,
		"fallback": "si-glyph:money",
	});
}

export default Component;
