import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twpo036bv.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twpo036bv"/>`,
		"fallback": "foundation:tablet-portrait",
	});
}

export default Component;
