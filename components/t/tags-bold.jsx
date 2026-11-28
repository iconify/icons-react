import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtr0n5b1y.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtr0n5b1y"/>`,
		"fallback": "pullo:tags-bold",
	});
}

export default Component;
