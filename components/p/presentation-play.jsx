import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j1j30gbfu.css';
import '../../css/x/xc5vq7b0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j1j30gbfu"/><path class="xc5vq7b0n"/></g>`,
		"fallback": "reicon:presentation-play",
	});
}

export default Component;
