import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c3id47bcu.css';
import '../../css/t/t9o2bbbrp.css';
import '../../css/a/aalr8-b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c3id47bcu"/><path class="t9o2bbbrp wm-a"/><path class="aalr8-b6s wm-s"/></g>`,
		"fallback": "withicons:pin-off-solid",
	});
}

export default Component;
