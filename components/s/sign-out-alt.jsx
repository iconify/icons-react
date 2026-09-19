import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhxnqcv6i.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhxnqcv6i"/>`,
		"fallback": "fa7-solid:sign-out-alt",
	});
}

export default Component;
