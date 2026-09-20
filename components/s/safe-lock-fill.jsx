import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bao23p41t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bao23p41t"/>`,
		"fallback": "mingcute:safe-lock-fill",
	});
}

export default Component;
