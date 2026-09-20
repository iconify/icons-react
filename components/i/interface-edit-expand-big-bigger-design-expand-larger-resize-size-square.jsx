import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cp7w0mmla.css';
import '../../css/t/tdpwy51xn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cp7w0mmla"/><rect class="tdpwy51xn"/></g>`,
		"fallback": "streamline:interface-edit-expand-big-bigger-design-expand-larger-resize-size-square",
	});
}

export default Component;
