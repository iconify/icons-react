import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h_nk4118m.css';
import '../../css/q/qrw1gubvo.css';
import '../../css/g/g79mtgboy.css';
import '../../css/g/g4z6abbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h_nk4118m"/><path clip-rule="evenodd" class="qrw1gubvo"/><path class="g79mtgboy"/><path clip-rule="evenodd" class="g4z6abbdr"/></g>`,
		"fallback": "solar:pin-list-bold",
	});
}

export default Component;
