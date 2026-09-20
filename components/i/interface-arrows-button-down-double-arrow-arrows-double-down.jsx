import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x5rymacau.css';
import '../../css/c/cn_z_8p2l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x5rymacau"/><path class="cn_z_8p2l"/></g>`,
		"fallback": "streamline:interface-arrows-button-down-double-arrow-arrows-double-down",
	});
}

export default Component;
