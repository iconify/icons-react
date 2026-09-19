import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmgnkr10o.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmgnkr10o"/>`,
		"fallback": "si-glyph:pin-location-add",
	});
}

export default Component;
