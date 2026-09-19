import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwy89e47i.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwy89e47i"/>`,
		"fallback": "si-glyph:law-hammer",
	});
}

export default Component;
