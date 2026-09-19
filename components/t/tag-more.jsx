import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py4q2dbqb.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py4q2dbqb"/>`,
		"fallback": "zmdi:tag-more",
	});
}

export default Component;
