import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zparngddh.css';
import '../../css/p/py17pdbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zparngddh"/><path clip-rule="evenodd" class="py17pdbwt"/></g>`,
		"fallback": "streamline-logos:playerfm-logo",
	});
}

export default Component;
