import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3jzqsvjd.css';
import '../../css/o/o1j_wmpcg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3jzqsvjd"/><path class="o1j_wmpcg"/>`,
		"fallback": "garden:ticket-stroke-20",
	});
}

export default Component;
