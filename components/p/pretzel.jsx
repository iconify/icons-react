import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/agzsdlk7k.css';
import '../../css/f/f0_j2wb_h.css';
import '../../css/y/y799fpbvk.css';
import '../../css/l/l1uaqybqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="agzsdlk7k"/><path class="f0_j2wb_h"/><path class="y799fpbvk"/><path clip-rule="evenodd" class="l1uaqybqx"/></g>`,
		"fallback": "andrsrxn:pretzel",
	});
}

export default Component;
