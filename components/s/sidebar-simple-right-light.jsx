import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2rct2h3q.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2rct2h3q"/>`,
		"fallback": "pullo:sidebar-simple-right-light",
	});
}

export default Component;
