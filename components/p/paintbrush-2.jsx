import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/is19q0bbh.css';
import '../../css/x/x55zwcczh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="is19q0bbh"/><path class="x55zwcczh"/></g>`,
		"fallback": "streamline:paintbrush-2",
	});
}

export default Component;
