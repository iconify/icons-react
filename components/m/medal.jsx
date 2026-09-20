import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx90f7bqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx90f7bqg"/>`,
		"fallback": "mdi:medal",
	});
}

export default Component;
