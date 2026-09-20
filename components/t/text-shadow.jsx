import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/c6q1qmbgh.css';
import '../../css/k/kgg9pkbyg.css';
import '../../css/p/pvukpiebn.css';
import '../../css/n/nicz63n0h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="c6q1qmbgh"/><path class="kgg9pkbyg"/><path class="pvukpiebn"/><path class="nicz63n0h"/></g>`,
		"fallback": "streamline-plump-color:text-shadow",
	});
}

export default Component;
