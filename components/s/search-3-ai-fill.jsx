import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1587wbjj.css';
import '../../css/b/b3rcvrrsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1587wbjj"/><path class="b3rcvrrsh"/>`,
		"fallback": "mingcute:search-3-ai-fill",
	});
}

export default Component;
