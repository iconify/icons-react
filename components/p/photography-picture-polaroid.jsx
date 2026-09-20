import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzephrjzr.css';
import '../../css/q/qpinueb1v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzephrjzr"/><path class="qpinueb1v"/>`,
		"fallback": "streamline-pixel:photography-picture-polaroid",
	});
}

export default Component;
