import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9oyev17j.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9oyev17j"/>`,
		"fallback": "fa6-solid:shop-lock",
	});
}

export default Component;
