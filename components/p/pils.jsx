import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a1uzfjbfw.css';
import '../../css/j/jb4o-fbmu.css';
import '../../css/b/bf9_qabtn.css';
import '../../css/t/t0cl5vbvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a1uzfjbfw"/><path class="jb4o-fbmu"/><circle class="bf9_qabtn"/><path class="t0cl5vbvd"/></g>`,
		"fallback": "lets-icons:pils",
	});
}

export default Component;
