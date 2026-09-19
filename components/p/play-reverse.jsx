import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti6j9ubny.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti6j9ubny"/>`,
		"fallback": "fluent-mdl2:play-reverse",
	});
}

export default Component;
