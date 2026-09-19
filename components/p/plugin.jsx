import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy8w9gs9k.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy8w9gs9k"/>`,
		"fallback": "si-glyph:plugin",
	});
}

export default Component;
