import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv7ibq-3o.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv7ibq-3o"/>`,
		"fallback": "fa6-solid:unlock",
	});
}

export default Component;
