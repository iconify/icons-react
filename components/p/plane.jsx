import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpr1erb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpr1erb0q"/>`,
		"fallback": "noviair-light:plane",
	});
}

export default Component;
