import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9kairbqh.css';

const viewBox = {"width":440,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9kairbqh"/>`,
		"fallback": "zmdi:undo",
	});
}

export default Component;
