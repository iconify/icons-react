import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gj-z3-b6w.css';
import '../../css/x/x9na87bpn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gj-z3-b6w"/><path class="x9na87bpn"/></g>`,
		"fallback": "pepicons:loop",
	});
}

export default Component;
