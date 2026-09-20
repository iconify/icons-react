import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pxxu51v9h.css';
import '../../css/o/oxrehlboa.css';
import '../../css/i/ihfsndiwn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pxxu51v9h"/><path class="oxrehlboa"/><path class="ihfsndiwn"/></g>`,
		"fallback": "streamline-color:online-medical-call-service",
	});
}

export default Component;
