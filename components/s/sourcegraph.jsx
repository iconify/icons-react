import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so_6jjyfu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so_6jjyfu"/>`,
		"fallback": "cib:sourcegraph",
	});
}

export default Component;
