import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od2094b8y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od2094b8y"/>`,
		"fallback": "streamline:serving-dome",
	});
}

export default Component;
