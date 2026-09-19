import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8m5ogb5p.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8m5ogb5p"/>`,
		"fallback": "whh:rook",
	});
}

export default Component;
