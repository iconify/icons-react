import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcyvked-q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pcyvked-q"/>`,
		"fallback": "streamline:shipping-box-1-remix",
	});
}

export default Component;
