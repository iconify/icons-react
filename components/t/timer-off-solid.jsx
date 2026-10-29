import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d7496abza.css';
import '../../css/l/lrb2rmp9w.css';
import '../../css/a/aalr8-b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="d7496abza"/><path class="lrb2rmp9w wm-a"/><path class="aalr8-b6s wm-s"/></g>`,
		"fallback": "withicons:timer-off-solid",
	});
}

export default Component;
