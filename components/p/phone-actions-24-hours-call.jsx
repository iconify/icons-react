import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iydvs3b6j.css';
import '../../css/n/n6yt3jb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iydvs3b6j"/><path class="n6yt3jb7j"/></g>`,
		"fallback": "streamline-freehand:phone-actions-24-hours-call",
	});
}

export default Component;
