import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g5_u58b_a.css';
import '../../css/b/b0j42im0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g5_u58b_a"/><path class="b0j42im0h"/></g>`,
		"fallback": "lucide:save-check",
	});
}

export default Component;
