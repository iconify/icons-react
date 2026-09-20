import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k67q95bga.css';
import '../../css/a/apsssvb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k67q95bga"/><path class="apsssvb-p"/></g>`,
		"fallback": "streamline-freehand:toilet-paper",
	});
}

export default Component;
