import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nhn27swpu.css';
import '../../css/h/hdi6-gpca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nhn27swpu"/><path class="hdi6-gpca"/></g>`,
		"fallback": "coolicons:robot-duocolor-round",
	});
}

export default Component;
