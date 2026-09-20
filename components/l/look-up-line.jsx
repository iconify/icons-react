import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri43c8k7n.css';
import '../../css/z/z2f80nbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri43c8k7n"/><path class="z2f80nbkt"/>`,
		"fallback": "mingcute:look-up-line",
	});
}

export default Component;
