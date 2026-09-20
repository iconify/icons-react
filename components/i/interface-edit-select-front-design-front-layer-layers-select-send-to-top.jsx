import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x5u7uu_tp.css';
import '../../css/n/n_g6gsguv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="x5u7uu_tp"/><path class="n_g6gsguv"/></g>`,
		"fallback": "streamline:interface-edit-select-front-design-front-layer-layers-select-send-to-top",
	});
}

export default Component;
