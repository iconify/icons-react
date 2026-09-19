import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id4eikblk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id4eikblk"/>`,
		"fallback": "fluent-mdl2:page-checked-out",
	});
}

export default Component;
