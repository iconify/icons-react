import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqj70vbfk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqj70vbfk"/>`,
		"fallback": "raphael:view",
	});
}

export default Component;
