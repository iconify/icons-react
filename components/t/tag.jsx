import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/th9ncey-d.css';
import '../../css/l/le5satbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="th9ncey-d"/><circle class="le5satbnh"/></g>`,
		"fallback": "lucide:tag",
	});
}

export default Component;
