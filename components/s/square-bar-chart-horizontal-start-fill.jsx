import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrrbmjb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lrrbmjb6g"/>`,
		"fallback": "keyline-icons:square-bar-chart-horizontal-start-fill",
	});
}

export default Component;
