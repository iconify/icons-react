import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7740dnjq.css';
import '../../css/j/jclmsksby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7740dnjq"/><path class="jclmsksby"/>`,
		"fallback": "mingcute:shuffle-line",
	});
}

export default Component;
