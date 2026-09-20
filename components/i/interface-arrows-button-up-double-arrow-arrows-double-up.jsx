import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hkjyhbbry.css';
import '../../css/b/bb1qp5ixe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hkjyhbbry"/><path class="bb1qp5ixe"/></g>`,
		"fallback": "streamline:interface-arrows-button-up-double-arrow-arrows-double-up",
	});
}

export default Component;
