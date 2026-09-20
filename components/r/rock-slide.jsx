import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk3m6-_kt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk3m6-_kt"/>`,
		"fallback": "streamline:rock-slide",
	});
}

export default Component;
