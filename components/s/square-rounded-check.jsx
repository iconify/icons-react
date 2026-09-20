import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l97qpbbsj.css';
import '../../css/n/nhrqm3bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l97qpbbsj"/><path class="nhrqm3bvg"/></g>`,
		"fallback": "tabler:square-rounded-check",
	});
}

export default Component;
