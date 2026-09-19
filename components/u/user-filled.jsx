import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uche6nifg.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uche6nifg"/>`,
		"fallback": "ep:user-filled",
	});
}

export default Component;
