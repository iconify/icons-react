import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shvlg_s5o.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shvlg_s5o"/>`,
		"fallback": "si-glyph:person",
	});
}

export default Component;
