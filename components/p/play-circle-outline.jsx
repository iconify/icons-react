import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wckr9kb1z.css';
import '../../css/e/ex_szhc5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wckr9kb1z"/><path class="ex_szhc5n"/>`,
		"fallback": "eva:play-circle-outline",
	});
}

export default Component;
