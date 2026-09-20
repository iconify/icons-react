import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2v5o1kkk.css';
import '../../css/i/ii2opmssb.css';
import '../../css/j/j0uhodmyp.css';
import '../../css/y/yqrx76bpz.css';
import '../../css/n/nqm4jhais.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v2v5o1kkk"/><path class="ii2opmssb"/><path class="j0uhodmyp"/><path class="yqrx76bpz"/><path class="nqm4jhais"/></g>`,
		"fallback": "streamline-ultimate-color:timer-10",
	});
}

export default Component;
