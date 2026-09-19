import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlv7vxu_o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlv7vxu_o"/>`,
		"fallback": "glyphs:quote-single-duo",
	});
}

export default Component;
