import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncczvnomg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncczvnomg"/>`,
		"fallback": "pullo:user-slash",
	});
}

export default Component;
