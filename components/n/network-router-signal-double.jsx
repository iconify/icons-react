import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q-3a-0i9k.css';
import '../../css/j/j8bzfxbok.css';
import '../../css/p/p2du7ibqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q-3a-0i9k"/><path class="j8bzfxbok"/><path class="p2du7ibqa"/></g>`,
		"fallback": "streamline-freehand:network-router-signal-double",
	});
}

export default Component;
