import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/zjla2hdpl.css';
import '../../css/p/p-yl1xbny.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="zjla2hdpl"/><path class="p-yl1xbny"/></g>`,
		"fallback": "doodle-icons:sticky-note",
	});
}

export default Component;
