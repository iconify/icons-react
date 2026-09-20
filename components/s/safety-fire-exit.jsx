import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lf4o9v7zv.css';
import '../../css/s/s2r-j5aha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lf4o9v7zv"/><path class="s2r-j5aha"/></g>`,
		"fallback": "streamline-freehand:safety-fire-exit",
	});
}

export default Component;
