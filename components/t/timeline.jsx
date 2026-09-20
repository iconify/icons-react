import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_h3lz1qs.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_h3lz1qs"/>`,
		"fallback": "system-uicons:timeline",
	});
}

export default Component;
