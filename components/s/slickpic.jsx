import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1t33f54q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1t33f54q"/>`,
		"fallback": "thesvg-color:slickpic",
	});
}

export default Component;
