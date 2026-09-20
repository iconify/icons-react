import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qay0ro2fz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qay0ro2fz"/>`,
		"fallback": "pajamas:marquee-selection",
	});
}

export default Component;
