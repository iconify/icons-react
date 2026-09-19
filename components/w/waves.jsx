import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yimpmabxt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yimpmabxt"/>`,
		"fallback": "glyphs:waves",
	});
}

export default Component;
