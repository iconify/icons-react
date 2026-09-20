import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mwtofibaa.css';
import '../../css/h/h0sixgbyk.css';
import '../../css/f/f-n-q3bfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mwtofibaa"/><path class="h0sixgbyk"/><path class="f-n-q3bfq"/></g>`,
		"fallback": "streamline-freehand:locker-room-suitcase-umbrella",
	});
}

export default Component;
