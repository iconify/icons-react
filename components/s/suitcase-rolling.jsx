import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/updxjmbtx.css';
import '../../css/v/v3dihab8e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="updxjmbtx"/><path class="v3dihab8e"/></g>`,
		"fallback": "streamline-flex:suitcase-rolling",
	});
}

export default Component;
