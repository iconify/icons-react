import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcd1uub9g.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcd1uub9g"/>`,
		"fallback": "si-glyph:square-star",
	});
}

export default Component;
