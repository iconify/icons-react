import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nw5k2pbsn.css';
import '../../css/n/nrtpxxfsi.css';
import '../../css/r/rfiylib8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nw5k2pbsn"/><path class="nrtpxxfsi wm-a"/><path class="rfiylib8m wm-s"/></g>`,
		"fallback": "withicons:sparkler-solid",
	});
}

export default Component;
