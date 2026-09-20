import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mm5z0ac2n.css';
import '../../css/d/dln8ziysl.css';
import '../../css/y/yosxokljj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mm5z0ac2n"/><path class="dln8ziysl"/><path class="yosxokljj"/></g>`,
		"fallback": "streamline-flex:rotate-right-circle",
	});
}

export default Component;
