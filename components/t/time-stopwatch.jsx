import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w9f5tsnyp.css';
import '../../css/y/yk_ia5bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w9f5tsnyp"/><path class="yk_ia5bfs"/></g>`,
		"fallback": "streamline-freehand:time-stopwatch",
	});
}

export default Component;
