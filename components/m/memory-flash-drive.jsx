import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d0711aben.css';
import '../../css/h/hfowqt5sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d0711aben"/><path class="hfowqt5sl"/></g>`,
		"fallback": "streamline-freehand:memory-flash-drive",
	});
}

export default Component;
