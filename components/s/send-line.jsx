import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kijpecbmw.css';
import '../../css/c/c-2glzb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kijpecbmw"/><path class="c-2glzb4h"/>`,
		"fallback": "mingcute:send-line",
	});
}

export default Component;
