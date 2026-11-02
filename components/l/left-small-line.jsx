import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brc5an_7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brc5an_7c"/>`,
		"fallback": "mingcute:left-small-line",
	});
}

export default Component;
