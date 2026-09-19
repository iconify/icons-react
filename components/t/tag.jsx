import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti37xlb1p.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti37xlb1p"/>`,
		"fallback": "fa6-solid:tag",
	});
}

export default Component;
