import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byz9vkb6r.css';
import '../../css/h/h_ma9rt0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="byz9vkb6r"/><path class="h_ma9rt0q"/>`,
		"fallback": "typcn:lock-closed-outline",
	});
}

export default Component;
