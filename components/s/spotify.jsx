import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqvennbmd.css';
import '../../css/g/g4--9fbfr.css';
import '../../css/s/sq052614m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lqvennbmd"/><path class="g4--9fbfr"/><path class="sq052614m"/></g>`,
		"fallback": "streamline-color:spotify",
	});
}

export default Component;
