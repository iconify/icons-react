import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m0f3z_bzo.css';
import '../../css/s/sja-rubob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m0f3z_bzo"/><path clip-rule="evenodd" class="sja-rubob"/></g>`,
		"fallback": "reicon:search-minus2-filled",
	});
}

export default Component;
