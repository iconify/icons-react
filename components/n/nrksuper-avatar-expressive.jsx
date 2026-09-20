import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/idqwhrbft.css';
import '../../css/k/kd3dk6bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="idqwhrbft"/><path clip-rule="evenodd" class="kd3dk6bth"/></g>`,
		"fallback": "nrk:nrksuper-avatar-expressive",
	});
}

export default Component;
