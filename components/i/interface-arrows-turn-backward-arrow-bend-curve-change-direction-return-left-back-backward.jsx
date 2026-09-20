import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lgi36jbgm.css';
import '../../css/w/wfum1eb-y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lgi36jbgm"/><path class="wfum1eb-y"/></g>`,
		"fallback": "streamline:interface-arrows-turn-backward-arrow-bend-curve-change-direction-return-left-back-backward",
	});
}

export default Component;
