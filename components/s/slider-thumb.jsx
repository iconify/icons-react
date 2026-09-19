import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkfmp-bto.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkfmp-bto"/>`,
		"fallback": "fluent-mdl2:slider-thumb",
	});
}

export default Component;
