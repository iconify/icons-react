import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lddcv2bqb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lddcv2bqb"/>`,
		"fallback": "fa7-brands:mandalorian",
	});
}

export default Component;
