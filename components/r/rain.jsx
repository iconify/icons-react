import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am917b6kx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am917b6kx"/>`,
		"fallback": "fluent-mdl2:rain",
	});
}

export default Component;
