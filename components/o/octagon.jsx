import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm8gi1btq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm8gi1btq"/>`,
		"fallback": "glyphs:octagon",
	});
}

export default Component;
