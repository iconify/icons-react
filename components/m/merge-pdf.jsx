import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m4qhqpswk.css';
import '../../css/d/dd41nxbxg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m4qhqpswk"/><path class="dd41nxbxg"/></g>`,
		"fallback": "streamline-flex:merge-pdf",
	});
}

export default Component;
