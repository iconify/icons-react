import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z05uk-bek.css';
import '../../css/t/t4zxnwuot.css';
import '../../css/q/qpz7cvbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><ellipse class="z05uk-bek"/><path class="t4zxnwuot"/><path class="qpz7cvbsd"/></g>`,
		"fallback": "hugeicons:marketing",
	});
}

export default Component;
