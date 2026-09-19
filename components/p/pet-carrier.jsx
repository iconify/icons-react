import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk2ph2lxb.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk2ph2lxb"/>`,
		"fallback": "si-glyph:pet-carrier",
	});
}

export default Component;
