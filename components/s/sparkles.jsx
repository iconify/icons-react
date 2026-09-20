import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tdzubmfjh.css';
import '../../css/j/jgaige_pi.css';
import '../../css/k/ki_-kdbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tdzubmfjh"/><path clip-rule="evenodd" class="jgaige_pi"/><path class="ki_-kdbap"/></g>`,
		"fallback": "reicon:sparkles",
	});
}

export default Component;
