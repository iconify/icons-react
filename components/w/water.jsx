import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-w4dlcpq.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-w4dlcpq"/>`,
		"fallback": "memory:water",
	});
}

export default Component;
