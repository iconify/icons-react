import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb14ykb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb14ykb3p"/>`,
		"fallback": "mingcute:unfold-vertical-line",
	});
}

export default Component;
