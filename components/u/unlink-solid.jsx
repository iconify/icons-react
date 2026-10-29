import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ar5337inl.css';
import '../../css/j/j9pch8bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ar5337inl"/><path class="j9pch8bpz wm-s"/></g>`,
		"fallback": "withicons:unlink-solid",
	});
}

export default Component;
