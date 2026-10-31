import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mv0rgpaeg.css';
import '../../css/j/j2rqp5c2n.css';
import '../../css/t/twmw6cc7j.css';
import '../../css/r/rdfo331mt.css';
import '../../css/q/qrc5mfhay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mv0rgpaeg wm-shadow"/><path class="j2rqp5c2n"/><path class="twmw6cc7j"/><path class="rdfo331mt"/><path class="qrc5mfhay"/></g>`,
		"fallback": "withicons-retro:ticket-percent",
	});
}

export default Component;
