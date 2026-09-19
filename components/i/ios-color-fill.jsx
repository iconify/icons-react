import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp35ndvma.css';
import '../../css/x/xyg2e4p_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp35ndvma"/><path class="xyg2e4p_h"/>`,
		"fallback": "ion:ios-color-fill",
	});
}

export default Component;
