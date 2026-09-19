import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaygjqbjb.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaygjqbjb"/>`,
		"fallback": "si-glyph:sign-road-2",
	});
}

export default Component;
