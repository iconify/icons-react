import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubmo3tbil.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubmo3tbil"/>`,
		"fallback": "fa7-solid:list-alt",
	});
}

export default Component;
