import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nj_05b83q.css';
import '../../css/r/raoql9qnh.css';
import '../../css/t/tuq51rxgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nj_05b83q"/><path class="raoql9qnh"/><path class="tuq51rxgh"/></g>`,
		"fallback": "streamline-freehand:keyboard-eject-button",
	});
}

export default Component;
