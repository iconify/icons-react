import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rzkc8ryte.css';
import '../../css/k/kz0i04bhk.css';
import '../../css/f/fif1ehbkk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path clip-rule="evenodd" class="rzkc8ryte"/><path class="kz0i04bhk"/><path class="fif1ehbkk"/></g>`,
		"fallback": "icon-park-solid:ship",
	});
}

export default Component;
