import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qz694km8l.css';
import '../../css/g/gowmoib0w.css';
import '../../css/m/mwc9s5vvp.css';
import '../../css/a/aq7vvs-8w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="qz694km8l"/><circle class="gowmoib0w"/><circle class="mwc9s5vvp"/><path class="aq7vvs-8w"/></g>`,
		"fallback": "streamline:interface-share-share-transmit",
	});
}

export default Component;
