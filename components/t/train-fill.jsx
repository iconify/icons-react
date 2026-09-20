import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjajlikcf.css';
import '../../css/q/q4b6bxbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sjajlikcf"/><path class="q4b6bxbog"/>`,
		"fallback": "mingcute:train-fill",
	});
}

export default Component;
