import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_uf0fb0h.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_uf0fb0h"/>`,
		"fallback": "system-uicons:pull-left",
	});
}

export default Component;
