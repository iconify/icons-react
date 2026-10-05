import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/nqa26abcw.css';
import '../../css/m/m8b137q2g.css';
import '../../css/y/y0l1tq29l.css';
import '../../css/m/ma4hhybly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="nqa26abcw"/><path class="m8b137q2g"/><path class="y0l1tq29l"/><path class="ma4hhybly"/></g>`,
		"fallback": "matita:package",
	});
}

export default Component;
