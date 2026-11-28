import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_j2c6bga.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jlkcm4hst.css';
import '../../css/n/nkc-s7b_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_j2c6bga secondary"/><g class="dt0cm9dhy primary"><path class="jlkcm4hst"/><path class="nkc-s7b_x"/></g>`,
		"fallback": "iconaut:pin-diagonal-duo",
	});
}

export default Component;
