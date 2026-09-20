import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oao_uyfzi.css';
import '../../css/q/q2sjhfbzu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oao_uyfzi"/><path class="q2sjhfbzu"/></g>`,
		"fallback": "streamline:stream",
	});
}

export default Component;
