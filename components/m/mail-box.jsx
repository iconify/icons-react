import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwwp_sbig.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwwp_sbig"/>`,
		"fallback": "si-glyph:mail-box",
	});
}

export default Component;
