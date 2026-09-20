import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2zkc0bqo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2zkc0bqo"/>`,
		"fallback": "roentgen:side-mirror",
	});
}

export default Component;
