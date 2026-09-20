import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/du1ckebsm.css';
import '../../css/q/qc2lg0bip.css';
import '../../css/w/wk8bznb-t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="du1ckebsm"/><path class="qc2lg0bip"/><path class="wk8bznb-t"/></g>`,
		"fallback": "streamline:interface-arrows-move-right-down-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big",
	});
}

export default Component;
