import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/luy9z6pgm.css';
import '../../css/e/ehvke5qnp.css';
import '../../css/a/am157rupi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="luy9z6pgm"/><path class="ehvke5qnp"/><path clip-rule="evenodd" class="am157rupi"/></g>`,
		"fallback": "reicon:nightstand4-filled",
	});
}

export default Component;
