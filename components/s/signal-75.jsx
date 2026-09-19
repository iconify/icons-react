import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx_5pr5ek.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx_5pr5ek"/>`,
		"fallback": "glyphs:signal-75",
	});
}

export default Component;
