import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv4_thskj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv4_thskj"/>`,
		"fallback": "cib:mediafire",
	});
}

export default Component;
