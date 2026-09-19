import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b06mc9r6b.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b06mc9r6b"/>`,
		"fallback": "fa-solid:rupee-sign",
	});
}

export default Component;
