import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n7xu60bqe.css';
import '../../css/e/e_q_hachl.css';
import '../../css/b/bmob-8b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n7xu60bqe"/><path class="e_q_hachl"/><path class="bmob-8b2w"/></g>`,
		"fallback": "streamline-freehand:safety-fire-extinguisher",
	});
}

export default Component;
