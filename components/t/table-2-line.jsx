import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jph56f29d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jph56f29d"/>`,
		"fallback": "mingcute:table-2-line",
	});
}

export default Component;
