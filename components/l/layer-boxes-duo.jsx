import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imhjn0jvd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x5p80bb3e.css';
import '../../css/x/xnjzunbdq.css';
import '../../css/c/c63s6_bnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imhjn0jvd secondary"/><g class="dt0cm9dhy primary"><path class="x5p80bb3e"/><path class="xnjzunbdq"/><path class="c63s6_bnf"/></g>`,
		"fallback": "iconaut:layer-boxes-duo",
	});
}

export default Component;
