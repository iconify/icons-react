import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2vhfe_ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2vhfe_ur"/>`,
		"fallback": "mingcute:list-check-3-line",
	});
}

export default Component;
