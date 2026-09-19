import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-mkj44de.css';
import '../../css/b/bzp74jb9q.css';
import '../../css/t/t_9qd5hjv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q-mkj44de"/><path class="bzp74jb9q"/><path clip-rule="evenodd" class="t_9qd5hjv"/></g>`,
		"fallback": "fluent-emoji-flat:leftwards-pushing-hand",
	});
}

export default Component;
