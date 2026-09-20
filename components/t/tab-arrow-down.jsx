import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zlnehkbym.css';
import '../../css/t/t1fqozg8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zlnehkbym"/><path class="t1fqozg8z"/></g>`,
		"fallback": "lucide-lab:tab-arrow-down",
	});
}

export default Component;
