import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/l/l-bij6b4a.css';
import '../../css/l/lzz3-ib6p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="l-bij6b4a"/><path class="lzz3-ib6p"/></g>`,
		"fallback": "doodle-icons:receipt",
	});
}

export default Component;
