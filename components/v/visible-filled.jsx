import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uacxlzfww.css';
import '../../css/j/j0vie5bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uacxlzfww"/><path clip-rule="evenodd" class="j0vie5bjl"/>`,
		"fallback": "bitcoin-icons:visible-filled",
	});
}

export default Component;
