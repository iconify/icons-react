import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjzd3-bzm.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjzd3-bzm"/>`,
		"fallback": "si-glyph:rocket",
	});
}

export default Component;
