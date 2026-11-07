import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mg0--7bxk.css';
import '../../css/c/c683ke8ws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mg0--7bxk"/><path class="c683ke8ws"/></g>`,
		"fallback": "lucide:package-pen",
	});
}

export default Component;
