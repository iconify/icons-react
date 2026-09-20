import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vgm_o-btj.css';
import '../../css/w/wv-oi1vkm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vgm_o-btj"/><path class="wv-oi1vkm"/></g>`,
		"fallback": "streamline-color:store-computer-flat",
	});
}

export default Component;
