import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gizt081fz.css';
import '../../css/f/fntzryfta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gizt081fz"/><path class="fntzryfta"/></g>`,
		"fallback": "lucide:list-restart",
	});
}

export default Component;
