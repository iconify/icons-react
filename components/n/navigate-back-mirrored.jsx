import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg24xl_8r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg24xl_8r"/>`,
		"fallback": "fluent-mdl2:navigate-back-mirrored",
	});
}

export default Component;
