import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kf92libsa.css';
import '../../css/n/nrjvcnbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kf92libsa"/><path class="nrjvcnbnw"/></g>`,
		"fallback": "reicon:pin-add-duotone",
	});
}

export default Component;
