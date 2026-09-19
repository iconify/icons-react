import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbyeiab8a.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbyeiab8a"/>`,
		"fallback": "fluent-mdl2:up",
	});
}

export default Component;
