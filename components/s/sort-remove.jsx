import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5f48ybqp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5f48ybqp"/>`,
		"fallback": "carbon:sort-remove",
	});
}

export default Component;
