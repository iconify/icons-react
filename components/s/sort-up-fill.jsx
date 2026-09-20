import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae3m4ibfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae3m4ibfo"/>`,
		"fallback": "prime:sort-up-fill",
	});
}

export default Component;
