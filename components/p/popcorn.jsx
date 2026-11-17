import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yvl34nbls.css';
import '../../css/n/nq-_jbb4i.css';
import '../../css/h/h4el0xb2m.css';
import '../../css/p/p5cj8ebmf.css';
import '../../css/l/lpi9g3wtw.css';
import '../../css/x/xoi34xgnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="yvl34nbls"/><path class="nq-_jbb4i"/><path class="h4el0xb2m"/><path class="p5cj8ebmf"/><path class="lpi9g3wtw"/><path class="xoi34xgnf"/></g>`,
		"fallback": "matita:popcorn",
	});
}

export default Component;
