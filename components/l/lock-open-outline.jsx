import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byz9vkb6r.css';
import '../../css/k/ksdy6lv1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="byz9vkb6r"/><path class="ksdy6lv1y"/>`,
		"fallback": "typcn:lock-open-outline",
	});
}

export default Component;
