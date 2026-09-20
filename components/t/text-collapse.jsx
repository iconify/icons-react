import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk8d-19-h.css';
import '../../css/v/vdfu11bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vk8d-19-h"/><path clip-rule="evenodd" class="vdfu11bom"/></g>`,
		"fallback": "proicons:text-collapse",
	});
}

export default Component;
