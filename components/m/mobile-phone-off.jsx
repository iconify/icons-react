import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jx9ff5bsq.css';
import '../../css/x/xucabacoq.css';
import '../../css/w/wjxlogbpl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jx9ff5bsq"/><path class="xucabacoq"/><path class="wjxlogbpl"/></g>`,
		"fallback": "fluent-emoji-flat:mobile-phone-off",
	});
}

export default Component;
