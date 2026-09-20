import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h7g1m7b1e.css';
import '../../css/z/zxsqob7ay.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h7g1m7b1e"/><path class="zxsqob7ay"/></g>`,
		"fallback": "streamline:tidal-wave-solid",
	});
}

export default Component;
