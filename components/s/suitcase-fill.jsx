import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh0mm2bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh0mm2bor"/>`,
		"fallback": "mingcute:suitcase-fill",
	});
}

export default Component;
