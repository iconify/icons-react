import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzt4jjxuz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mzt4jjxuz"/>`,
		"fallback": "qlementine-icons:unroll-vertical-16",
	});
}

export default Component;
