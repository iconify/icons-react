import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unsnq708q.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unsnq708q"/>`,
		"fallback": "si-glyph:triangle-left",
	});
}

export default Component;
