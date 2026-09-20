import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuj8j_bro.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuj8j_bro"/>`,
		"fallback": "memory:play",
	});
}

export default Component;
