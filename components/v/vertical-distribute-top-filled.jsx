import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clnl6s1aj.css';
import '../../css/w/whz9jobil.css';
import '../../css/u/u65oy1y8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clnl6s1aj"/><rect class="whz9jobil"/><rect class="u65oy1y8y"/>`,
		"fallback": "boxicons:vertical-distribute-top-filled",
	});
}

export default Component;
