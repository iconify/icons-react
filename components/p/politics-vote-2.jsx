import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yyp5esbwc.css';
import '../../css/l/lrir3xrsq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yyp5esbwc"/><path class="lrir3xrsq"/></g>`,
		"fallback": "streamline-flex:politics-vote-2",
	});
}

export default Component;
