import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f69868bpf.css';
import '../../css/g/gmlax7b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f69868bpf"/><path class="gmlax7b8r"/></g>`,
		"fallback": "coolicons:tags-duotone-round",
	});
}

export default Component;
