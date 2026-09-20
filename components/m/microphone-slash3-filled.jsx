import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k087xcbly.css';
import '../../css/g/gv8kuubvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k087xcbly"/><path class="gv8kuubvf"/></g>`,
		"fallback": "reicon:microphone-slash3-filled",
	});
}

export default Component;
