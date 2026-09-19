import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se48-pe8k.css';
import '../../css/r/repczfbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se48-pe8k"/><path clip-rule="evenodd" class="repczfbpp"/>`,
		"fallback": "basil:notification-off-solid",
	});
}

export default Component;
