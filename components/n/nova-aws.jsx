import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh1eqybkr.css';

const viewBox = {"width":33,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh1eqybkr"/>`,
		"fallback": "thesvg:nova-aws",
	});
}

export default Component;
