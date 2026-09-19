import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnj4z1-0n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnj4z1-0n"/>`,
		"fallback": "carbon:volume-up-filled-alt",
	});
}

export default Component;
