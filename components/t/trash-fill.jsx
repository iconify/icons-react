import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv4f0bbuf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv4f0bbuf"/>`,
		"fallback": "f7:trash-fill",
	});
}

export default Component;
