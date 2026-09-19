import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pafp66bvf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pafp66bvf"/>`,
		"fallback": "icons8:ticket",
	});
}

export default Component;
