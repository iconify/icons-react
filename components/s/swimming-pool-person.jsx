import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qsc-076dr.css';
import '../../css/d/dl6xvwcvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qsc-076dr"/><path class="dl6xvwcvi"/></g>`,
		"fallback": "streamline-freehand:swimming-pool-person",
	});
}

export default Component;
