import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4iliac4k.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4iliac4k"/>`,
		"fallback": "memory:map",
	});
}

export default Component;
