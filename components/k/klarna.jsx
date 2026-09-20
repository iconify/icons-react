import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la3rg9b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la3rg9b1i"/>`,
		"fallback": "simple-icons:klarna",
	});
}

export default Component;
