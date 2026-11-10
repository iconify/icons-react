import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f30r4v8bi.css';
import '../../css/i/i8p3d6bjp.css';
import '../../css/z/z3mdksbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="f30r4v8bi"><path class="i8p3d6bjp"/><path class="z3mdksbjk"/></g>`,
		"fallback": "matita:upsilon-capital",
	});
}

export default Component;
