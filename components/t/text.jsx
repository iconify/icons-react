import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcuc8ac3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcuc8ac3z"/>`,
		"fallback": "andrsrxn:text",
	});
}

export default Component;
