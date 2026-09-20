import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wtq9b74cd.css';
import '../../css/s/sw5tc6nlh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wtq9b74cd"/><path class="sw5tc6nlh"/></g>`,
		"fallback": "streamline:steps-number",
	});
}

export default Component;
