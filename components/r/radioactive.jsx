import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdho-bgwm.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdho-bgwm"/>`,
		"fallback": "si-glyph:radioactive",
	});
}

export default Component;
