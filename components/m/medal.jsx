import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sys52rhwt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sys52rhwt"/>`,
		"fallback": "fa7-solid:medal",
	});
}

export default Component;
