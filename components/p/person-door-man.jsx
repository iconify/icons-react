import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd8zlbb8r.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd8zlbb8r"/>`,
		"fallback": "si-glyph:person-door-man",
	});
}

export default Component;
