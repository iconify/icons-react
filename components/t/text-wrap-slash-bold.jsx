import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd4hpordp.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd4hpordp"/>`,
		"fallback": "pullo:text-wrap-slash-bold",
	});
}

export default Component;
