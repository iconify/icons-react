import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfj6xu_3o.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfj6xu_3o"/>`,
		"fallback": "fa6-solid:virus-slash",
	});
}

export default Component;
