import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cbdib2bdr.css';
import '../../css/d/d_72ekbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cbdib2bdr"/><path class="d_72ekbxk"/></g>`,
		"fallback": "lucide:layers-arrow-up",
	});
}

export default Component;
