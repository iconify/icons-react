import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_zookaaf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_zookaaf"/>`,
		"fallback": "fa7-solid:list-dots",
	});
}

export default Component;
