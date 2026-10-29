import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bcejtj7os.css';
import '../../css/l/lku320fjo.css';
import '../../css/a/aalr8-b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bcejtj7os"/><path class="lku320fjo wm-a"/><path class="aalr8-b6s wm-s"/></g>`,
		"fallback": "withicons:monitor-off-solid",
	});
}

export default Component;
