import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkc-ohblp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkc-ohblp"/>`,
		"fallback": "lsicon:packing-box-outline",
	});
}

export default Component;
