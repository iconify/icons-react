import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7dsj7b8y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7dsj7b8y"/>`,
		"fallback": "heroicons-solid:save",
	});
}

export default Component;
