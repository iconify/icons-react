import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zs55py_dd.css';
import '../../css/w/w0yyhnhhh.css';
import '../../css/a/aadkrzmmh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect transform="rotate(90 11.5 7.5)" class="zs55py_dd"/><rect transform="rotate(90 2.5 7)" class="w0yyhnhhh"/><path class="aadkrzmmh"/></g>`,
		"fallback": "streamline:interface-align-vertical-center-align-design-middle",
	});
}

export default Component;
