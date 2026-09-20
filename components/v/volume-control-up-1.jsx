import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/smoplpxgs.css';
import '../../css/c/c0f9-glib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="smoplpxgs"/><path class="c0f9-glib"/></g>`,
		"fallback": "streamline-freehand:volume-control-up-1",
	});
}

export default Component;
