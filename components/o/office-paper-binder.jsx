import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jgy8eubuj.css';
import '../../css/t/tsggolbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jgy8eubuj"/><path class="tsggolbqf"/></g>`,
		"fallback": "streamline-freehand:office-paper-binder",
	});
}

export default Component;
