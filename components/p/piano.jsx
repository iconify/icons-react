import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up_ob0yqq.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up_ob0yqq"/>`,
		"fallback": "si-glyph:piano",
	});
}

export default Component;
