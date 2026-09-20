import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e50zsvy-u.css';
import '../../css/f/f-c4afb0q.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e50zsvy-u"/><path class="f-c4afb0q"/>`,
		"fallback": "lineicons:sort-alphabetical",
	});
}

export default Component;
