import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vqqtv7yzo.css';
import '../../css/q/qeq7cabnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vqqtv7yzo"/><path class="qeq7cabnx"/></g>`,
		"fallback": "feather:rotate-cw",
	});
}

export default Component;
