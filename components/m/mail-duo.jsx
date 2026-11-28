import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igi5v8bda.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qxqm7i1xs.css';
import '../../css/p/pp1fe4bxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igi5v8bda secondary"/><g class="dt0cm9dhy primary"><path class="qxqm7i1xs"/><path class="pp1fe4bxb"/></g>`,
		"fallback": "iconaut:mail-duo",
	});
}

export default Component;
