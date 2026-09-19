import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvd_l_cdt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvd_l_cdt"/>`,
		"fallback": "glyphs:star-bold",
	});
}

export default Component;
