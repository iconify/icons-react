import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/stz1f9bap.css';
import '../../css/g/g0vr_wbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="stz1f9bap"/><path class="g0vr_wbgp"/></g>`,
		"fallback": "reicon:moon-cloud-filled",
	});
}

export default Component;
