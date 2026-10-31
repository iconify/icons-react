import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nz3oscbtn.css';
import '../../css/m/mbzukt5ba.css';
import '../../css/c/camcnmb1b.css';
import '../../css/m/mkpz7qbob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="nz3oscbtn"/><path class="mbzukt5ba wm-shine"/><path class="camcnmb1b wm-k"/><path class="mkpz7qbob wm-a"/></g>`,
		"fallback": "withicons-kawaii:presentation",
	});
}

export default Component;
