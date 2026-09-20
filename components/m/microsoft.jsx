import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir5c0ly1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir5c0ly1t"/>`,
		"fallback": "prime:microsoft",
	});
}

export default Component;
