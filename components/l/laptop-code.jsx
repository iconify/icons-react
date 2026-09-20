import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqh5qzb7y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqh5qzb7y"/>`,
		"fallback": "la:laptop-code",
	});
}

export default Component;
