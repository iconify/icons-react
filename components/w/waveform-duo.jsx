import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l3f1u7b1b.css';
import '../../css/c/cq-m1fwut.css';
import '../../css/c/cfkicbk9n.css';
import '../../css/z/zp3kgxefn.css';
import '../../css/a/a8ofgxb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l3f1u7b1b"/><path class="cq-m1fwut"/><path class="cfkicbk9n"/><path class="zp3kgxefn"/><path class="a8ofgxb6j"/></g>`,
		"fallback": "iconaut:waveform-duo",
	});
}

export default Component;
