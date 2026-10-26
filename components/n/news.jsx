import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/b/bv7go7mgj.css';
import '../../css/o/o5biosboo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="bv7go7mgj"/><path class="o5biosboo"/></g>`,
		"fallback": "doodle-icons:news",
	});
}

export default Component;
