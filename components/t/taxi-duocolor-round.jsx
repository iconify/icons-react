import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g6r7bvjix.css';
import '../../css/n/n2pailbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g6r7bvjix"/><path class="n2pailbld"/></g>`,
		"fallback": "coolicons:taxi-duocolor-round",
	});
}

export default Component;
