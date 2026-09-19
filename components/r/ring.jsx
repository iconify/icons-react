import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk-wdccxc.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk-wdccxc"/>`,
		"fallback": "si-glyph:ring",
	});
}

export default Component;
