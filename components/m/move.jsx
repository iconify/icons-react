import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlo_a2b3r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlo_a2b3r"/>`,
		"fallback": "f7:move",
	});
}

export default Component;
