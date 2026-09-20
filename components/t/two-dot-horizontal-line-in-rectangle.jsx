import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixrh7abjr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixrh7abjr"/>`,
		"fallback": "pinhead:two-dot-horizontal-line-in-rectangle",
	});
}

export default Component;
