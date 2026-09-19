import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va95obcov.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="va95obcov"/>`,
		"fallback": "glyphs-poly:phone-remove",
	});
}

export default Component;
