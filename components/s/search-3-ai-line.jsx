import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owihpxbhp.css';
import '../../css/b/b3rcvrrsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owihpxbhp"/><path class="b3rcvrrsh"/>`,
		"fallback": "mingcute:search-3-ai-line",
	});
}

export default Component;
