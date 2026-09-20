import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y4jk9gbse.css';
import '../../css/k/kkjommb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y4jk9gbse"/><path class="kkjommb0n"/></g>`,
		"fallback": "lets-icons:mortarboard",
	});
}

export default Component;
