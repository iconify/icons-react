import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc17n3brn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc17n3brn"/>`,
		"fallback": "fluent-mdl2:trim-start",
	});
}

export default Component;
