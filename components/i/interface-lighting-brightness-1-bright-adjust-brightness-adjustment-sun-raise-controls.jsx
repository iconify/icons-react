import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xa2w_zv3q.css';
import '../../css/t/th8ej3b8k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="xa2w_zv3q"/><path class="th8ej3b8k"/></g>`,
		"fallback": "streamline:interface-lighting-brightness-1-bright-adjust-brightness-adjustment-sun-raise-controls",
	});
}

export default Component;
