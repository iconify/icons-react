import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b95-lfb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b95-lfb_w"/>`,
		"fallback": "mingcute:lock-2-line",
	});
}

export default Component;
