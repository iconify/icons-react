import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1hgb6bzy.css';
import '../../css/f/fj3ryr4ly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1hgb6bzy"/><path class="fj3ryr4ly"/>`,
		"fallback": "mingcute:swimming-fill",
	});
}

export default Component;
