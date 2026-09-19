import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1muyrb2y.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1muyrb2y"/>`,
		"fallback": "fa6-solid:person-arrow-down-to-line",
	});
}

export default Component;
