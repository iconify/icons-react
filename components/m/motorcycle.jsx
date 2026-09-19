import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msb5m1bqe.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msb5m1bqe"/>`,
		"fallback": "fa7-solid:motorcycle",
	});
}

export default Component;
