import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pizivf--y.css';
import '../../css/z/zjjgj5h6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pizivf--y"/><path class="zjjgj5h6d"/></g>`,
		"fallback": "lucide:redo",
	});
}

export default Component;
