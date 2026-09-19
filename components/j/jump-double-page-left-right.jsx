import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwbh-cbmv.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwbh-cbmv"/>`,
		"fallback": "si-glyph:jump-double-page-left-right",
	});
}

export default Component;
