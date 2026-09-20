import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf2nnx-8i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf2nnx-8i"/>`,
		"fallback": "lsicon:to-top-outline",
	});
}

export default Component;
