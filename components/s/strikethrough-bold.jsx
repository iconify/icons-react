import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt1hw8ngl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt1hw8ngl"/>`,
		"fallback": "glyphs:strikethrough-bold",
	});
}

export default Component;
