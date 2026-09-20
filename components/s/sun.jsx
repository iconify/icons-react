import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xedhwhzeh.css';
import '../../css/v/v5chx8n4s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xedhwhzeh"/><path class="v5chx8n4s"/></g>`,
		"fallback": "streamline-flex:sun",
	});
}

export default Component;
