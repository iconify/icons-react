import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vewoeyc8e.css';
import '../../css/x/xazw8vl9y.css';
import '../../css/l/lfxdv5jzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vewoeyc8e"/><path class="xazw8vl9y"/><path class="lfxdv5jzz"/></g>`,
		"fallback": "streamline-freehand:multimedia-controls-loop-arrow-1",
	});
}

export default Component;
