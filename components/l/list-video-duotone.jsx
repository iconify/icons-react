import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jqe9erfso.css';
import '../../css/i/ice5ohbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jqe9erfso"/><path class="ice5ohbof"/></g>`,
		"fallback": "keyline-icons:list-video-duotone",
	});
}

export default Component;
