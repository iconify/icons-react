import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atr8lybzg.css';
import '../../css/q/qbrel2bfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atr8lybzg"/><path class="qbrel2bfe"/>`,
		"fallback": "streamline-ultimate:single-man-focus-bold",
	});
}

export default Component;
