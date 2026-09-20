import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/spvo8vbit.css';
import '../../css/e/e140ko56p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="spvo8vbit"/><path class="e140ko56p"/></g>`,
		"fallback": "streamline-flex:keyboard-option-setting-gear",
	});
}

export default Component;
