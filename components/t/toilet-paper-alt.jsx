import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv4gh3xea.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv4gh3xea"/>`,
		"fallback": "fa7-solid:toilet-paper-alt",
	});
}

export default Component;
