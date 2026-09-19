import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eghdr7tiy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eghdr7tiy"/>`,
		"fallback": "icomoon-free:stats-dots",
	});
}

export default Component;
