import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_0ic6bna.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_0ic6bna"/>`,
		"fallback": "f7:phone-down-circle",
	});
}

export default Component;
