import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8e8-ty9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8e8-ty9l"/>`,
		"fallback": "mingcute:monument-fill",
	});
}

export default Component;
