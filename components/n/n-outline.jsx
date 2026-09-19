import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2ofdew1v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2ofdew1v"/>`,
		"fallback": "glyphs:n-outline",
	});
}

export default Component;
