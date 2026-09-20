import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bups_qgxx.css';
import '../../css/n/nu4n-jbqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bups_qgxx"/><path class="nu4n-jbqn"/></g>`,
		"fallback": "streamline-freehand:view-eye-1",
	});
}

export default Component;
