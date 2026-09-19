import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4v2nxbwv.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4v2nxbwv"/>`,
		"fallback": "fa-brands:supple",
	});
}

export default Component;
