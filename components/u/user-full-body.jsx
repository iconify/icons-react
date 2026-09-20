import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyxmz9t3z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyxmz9t3z"/>`,
		"fallback": "streamline-flex:user-full-body",
	});
}

export default Component;
