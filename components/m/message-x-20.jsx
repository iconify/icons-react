import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5ucm-c-n.css';
import '../../css/p/puz5jibvr.css';
import '../../css/e/ed4mxccbx.css';
import '../../css/e/eqdr87b3l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5ucm-c-n"/><path class="puz5jibvr"/><path class="ed4mxccbx"/><path class="eqdr87b3l"/>`,
		"fallback": "energy-icons:message-x-20",
	});
}

export default Component;
