import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z1kvdcbpg.css';
import '../../css/f/fdsna2deo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z1kvdcbpg"/><path class="fdsna2deo"/></g>`,
		"fallback": "lucide:square-arrow-right-exit",
	});
}

export default Component;
