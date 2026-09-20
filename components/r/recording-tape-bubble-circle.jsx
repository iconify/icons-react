import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e8hnd-b6w.css';
import '../../css/j/j7lx2dbqm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e8hnd-b6w"/><path class="j7lx2dbqm"/></g>`,
		"fallback": "streamline:recording-tape-bubble-circle",
	});
}

export default Component;
