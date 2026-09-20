import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mzepbrqvc.css';
import '../../css/j/jips0-buh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mzepbrqvc"/><path class="jips0-buh"/></g>`,
		"fallback": "lucide-lab:ufo",
	});
}

export default Component;
