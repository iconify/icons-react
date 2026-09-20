import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/ld9py9b4z.css';
import '../../css/s/say7pb5yh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ld9py9b4z"/><path class="say7pb5yh"/></g>`,
		"fallback": "streamline-freehand:optimization-configuration",
	});
}

export default Component;
