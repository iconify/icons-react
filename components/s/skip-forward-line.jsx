import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok38s20xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok38s20xq"/>`,
		"fallback": "mingcute:skip-forward-line",
	});
}

export default Component;
