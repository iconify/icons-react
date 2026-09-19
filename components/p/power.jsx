import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjhb0_cjm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjhb0_cjm"/>`,
		"fallback": "glyphs:power",
	});
}

export default Component;
