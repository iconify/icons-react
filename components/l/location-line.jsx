import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jknbwyp-h.css';
import '../../css/l/lzloo5hnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jknbwyp-h"/><path class="lzloo5hnm"/>`,
		"fallback": "mingcute:location-line",
	});
}

export default Component;
