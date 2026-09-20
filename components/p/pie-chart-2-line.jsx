import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw8qyw07p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw8qyw07p"/>`,
		"fallback": "ri:pie-chart-2-line",
	});
}

export default Component;
